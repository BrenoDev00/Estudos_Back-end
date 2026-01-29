import { ContactService } from "./contact-service";
import { TContactData } from "../types/contact-data.type";
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

  const contactMockTwo: TContactData = {
    id: "2",
    name: "Contact test two",
    phone: [
      {
        id: "2",
        title: "Home",
        number: "(00) 5556-0998",
      },
    ],
    address: {
      id: "2",
      street: "Street X",
      zipCode: "4567-6677",
      number: 12,
    },
  };

  it("Should allow contact registration", async () => {
    contactRepositoryMock.addContact.mockResolvedValue(contactMockOne);

    const createdContact = await contactService.addContact(contactMockOne);

    expect(createdContact).toEqual(contactMockOne);
  });

  it("Should allow searching for contact by ID", async () => {
    contactRepositoryMock.getContactById.mockResolvedValue(contactMockOne);

    const searchedContact = await contactService.getContactById(
      contactMockOne.id,
    );

    expect(searchedContact).toEqual(contactMockOne);
  });

  it("Should allow to list all contacts", async () => {
    contactRepositoryMock.getAllContacts.mockResolvedValue([
      contactMockOne,
      contactMockTwo,
    ]);

    const contacts = await contactService.getAllContacts();

    expect(contacts).toEqual([contactMockOne, contactMockTwo]);
  });

  it("Should allow to updating a contact", async () => {
    contactRepositoryMock.updateContactById.mockResolvedValue({
      ...contactMockTwo,
      id: contactMockOne.id,
    });

    const updatedContact = await contactService.updateContactById(
      contactMockOne.id,
      contactMockTwo,
    );

    expect(updatedContact).toEqual({
      ...contactMockTwo,
      id: contactMockOne.id,
    });
  });

  it("Should allow to delete a contact", async () => {
    contactRepositoryMock.getAllContacts.mockResolvedValue([contactMockTwo]);

    contactRepositoryMock.deleteContactById.mockResolvedValue(contactMockOne);

    await contactService.deleteContactById(contactMockOne.id);

    const contacts = await contactService.getAllContacts();

    expect(contacts).toEqual(expect.not.arrayContaining([contactMockOne]));

    expect(contacts).toEqual(expect.arrayContaining([contactMockTwo]));
  });
});
