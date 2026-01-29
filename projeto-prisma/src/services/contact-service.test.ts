import { ContactService } from "./contact-service";
import { InMemoryContactRepository } from "../repositories/in-memory-contact-repository";
import { TAddContact } from "../types/add-contact.type";
import { TAllContactsData } from "../types/all-contacts-data.type";

describe("Contact Service", () => {
  let contactService: ContactService;
  let inMemoryContactRepository: InMemoryContactRepository;

  beforeEach(() => {
    inMemoryContactRepository = new InMemoryContactRepository();
    contactService = new ContactService(inMemoryContactRepository);
  });

  const contactMock: TAddContact = {
    name: "Contact two",
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
    const createdContact = await contactService.addContact(contactMock);

    expect(createdContact).toEqual({
      id: expect.any(String),
      ...contactMock,
      phone: [...contactMock.phone].map((phone) => {
        return { ...phone, id: expect.any(String) };
      }),
      address: {
        ...contactMock.address,
        id: expect.any(String),
      },
    });
  });

  it("Should allow searching for contact by ID", async () => {
    const contactId = "1";

    const searchedContact = await contactService.getContactById(contactId);

    const expectedContact: TAllContactsData = {
      id: "1",
      name: "Contact one",
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

    expect(searchedContact).toEqual(expectedContact);
  });

  it("Should allow to list all contacts", async () => {
    const contacts = await contactService.getAllContacts();

    const expectedContact: TAllContactsData = {
      id: "1",
      name: "Contact one",
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

    expect(contacts).toEqual([expectedContact]);
  });

  it("Should allow to updating a contact", async () => {
    const contactId = "1";

    const updatedContact = await contactService.updateContactById(
      contactId,
      contactMock,
    );

    expect(updatedContact).toEqual({
      ...contactMock,
      id: contactId,
    });
  });

  it("Should allow to delete a contact", async () => {
    const contactId = "1";

    const deletedContact = await contactService.deleteContactById(contactId);

    const contacts = await contactService.getAllContacts();

    expect(contacts).toEqual(expect.not.arrayContaining([deletedContact]));
  });
});
