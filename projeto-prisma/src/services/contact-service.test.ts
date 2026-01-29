import { Contact } from "@prisma/client";
import { TAddContact } from "../types/add-contact.type";
import { ContactService } from "./contact-service";
import { TContactData } from "../types/contact-data.type";
import { IContactRepository } from "../types/repositories/contact-repository.type";
import { ContactRepository } from "../repositories/contact-repository";

describe("Contact Service", () => {
  const contactRepositoryMock: jest.Mocked<ContactRepository> = {
    getAllContacts: jest.fn(),
    getContactById: jest.fn(),
    addContact: jest.fn(),
    updateContactById: jest.fn(),
    deleteContactById: jest.fn(),
  };

  const contactService = new ContactService(contactRepositoryMock);

  const contactMockOne: TContactData = {
    id: "1",
    name: "Contact test one",

    phone: [
      {
        id: "1",
        title: "Personal",
        number: "(00) 4567-0998",
      },
    ],
    address: {
      id: "1",
      street: "Street Y",
      zipCode: "4567-8899",
      number: 56,
    },
  };

  const contactMockTwo: TAddContact = {
    name: "Contact test two",
    phone: [
      {
        title: "Home",
        number: "(00) 5556-0998",
      },
    ],
    address: {
      street: "Street X",
      zipCode: "4567-6677",
      number: 12,
    },
  };

  it.only("Should allow contact registration", async () => {
    contactRepositoryMock.addContact.mockResolvedValue(contactMockOne);

    const createdContact = await contactService.addContact(contactMockOne);

    expect(createdContact).toEqual(contactMockOne);
  });

  it("Should allow searching for contact by ID", async () => {
    const createdContact = await contactService.addContact(contactMockOne);

    const searchedContact = await contactService.getContactById(
      createdContact.id,
    );

    expect(searchedContact).toEqual(createdContact);
  });

  it("Should allow to list all contacts", async () => {
    const createdContactOne = await contactService.addContact(contactMockOne);
    const createdContactTwo = await contactService.addContact(contactMockTwo);

    const contacts = await contactService.getAllContacts();

    expect(contacts).toEqual(
      expect.arrayContaining([createdContactOne, createdContactTwo]),
    );
  });

  it("Should allow to updating a contact", async () => {
    const createdContact = await contactService.addContact(contactMockOne);

    const updatedContact = await contactService.updateContactById(
      createdContact.id,
      contactMockTwo,
    );

    const searchedContact = await contactService.getContactById(
      updatedContact.id,
    );

    expect(searchedContact).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: contactMockTwo.name,
        phone: [
          {
            id: expect.any(String),
            title: "Home",
            number: "(00) 5556-0998",
          },
        ],
        address: {
          id: expect.any(String),
          ...contactMockTwo.address,
        },
      }),
    );
  });

  it("Should allow to delete a contact", async () => {
    const createdContactOne = await contactService.addContact(contactMockOne);
    const createdContactTwo = await contactService.addContact(contactMockTwo);

    await contactService.deleteContactById(createdContactOne.id);

    const contacts = await contactService.getAllContacts();

    expect(contacts).toEqual(expect.not.arrayContaining([createdContactOne]));

    expect(contacts).toEqual(expect.arrayContaining([createdContactTwo]));
  });
});
