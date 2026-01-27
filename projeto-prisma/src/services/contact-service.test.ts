import { ContactRepository } from "../repositories/contact-repository";
import { TAddContact } from "../types/add-contact.type";
import { ContactService } from "./contact-service";

describe("Contact Service", () => {
  const contactRepository = new ContactRepository();
  const contactService = new ContactService(contactRepository);

  const contactMockOne: TAddContact = {
    name: "Contact test one",
    phone: [
      {
        title: "Personal",
        number: "(00) 4567-0998",
      },
    ],
    address: {
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

  it("Should allow contact registration", async () => {
    const createdContact = await contactService.addContact(contactMockOne);

    expect(createdContact).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: contactMockOne.name,
        phone: expect.arrayContaining([
          {
            id: expect.any(String),
            title: "Personal",
            number: "(00) 4567-0998",
          },
        ]),
        address: {
          id: expect.any(String),
          ...contactMockOne.address,
        },
      }),
    );
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
