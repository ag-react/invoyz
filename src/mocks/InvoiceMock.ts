import {
  TInvoice,
  InvoiceStatusEnum,
} from './../types/InvoiceTypes';

export const InvoicesMock: TInvoice[] = [
  {
    "id": "RT3080",
    "createdOn": new Date("2021-08-18").toISOString(),
    "paymentDue": new Date("2021-08-19").toISOString(),
    "description": "Re-branding",
    "paymentTerms": 1,
    "clientName": "Jensen Huang",
    "clientEmail": "jensenh@mail.com",
    "status": InvoiceStatusEnum.PAID,
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "106 Kendell Street",
      "city": "Sharrington",
      "postCode": "NR24 5WQ",
      "country": "United Kingdom"
    },
    "items": [
      {
        "id": "249220a0-1b56-4dbb-87ad-9850320f6ca8",
        "name": "Brand Guidelines",
        "quantity": 1,
        "price": 1800.90,
        "total": 1800.90
      }
    ],
    "total": 1800.90
  },
  {
    "id": "XM9141",
    "createdOn": new Date("2021-08-21").toISOString(),
    "paymentDue": new Date("2021-09-20").toISOString(),
    "description": "Graphic Design",
    "paymentTerms": 30,
    "clientName": "Alex Grim",
    "clientEmail": "alexgrim@mail.com",
    "status": InvoiceStatusEnum.PENDING,
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "84 Church Way",
      "city": "Bradford",
      "postCode": "BD1 9PB",
      "country": "United Kingdom"
    },
    "items": [
      {
        "id": "249220a0-1b56-4dbb-87ad-9850320f6ca9",
        "name": "Banner Design",
        "quantity": 1,
        "price": 156.00,
        "total": 156.00
      },
      {
        "id": "249220a2-1b56-4dbb-87ad-9850320f6ca8",
        "name": "Email Design",
        "quantity": 2,
        "price": 200.00,
        "total": 400.00
      }
    ],
    "total": 556.00
  },
  {
    "id": "RG0314",
    "createdOn": new Date("2021-09-24").toISOString(),
    "paymentDue": new Date("2021-10-01").toISOString(),
    "description": "Website Redesign",
    "paymentTerms": 7,
    "clientName": "John Morrison",
    "clientEmail": "jm@myco.com",
    "status": InvoiceStatusEnum.PAID,
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "79 Dover Road",
      "city": "Westhall",
      "postCode": "IP19 3PF",
      "country": "United Kingdom"
    },
    "items": [
      {
        "id": "249220a0-1b57-4dbb-87ad-9850320f6ca8",
        "name": "Website Redesign",
        "quantity": 1,
        "price": 14002.33,
        "total": 14002.33
      }
    ],
    "total": 14002.33
  },
  {
    "id": "RT2080",
    "createdOn": new Date("2021-10-11").toISOString(),
    "paymentDue": new Date("2021-10-12").toISOString(),
    "description": "Logo Concept",
    "paymentTerms": 1,
    "clientName": "Alysa Werner",
    "clientEmail": "alysa@email.co.uk",
    "status": InvoiceStatusEnum.PENDING,
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "63 Warwick Road",
      "city": "Carlisle",
      "postCode": "CA20 2TG",
      "country": "United Kingdom"
    },
    "items": [
      {
        "id": "249220a0-1c54-4dbb-87ad-9850320f6ca8",
        "name": "Logo Sketches",
        "quantity": 1,
        "price": 102.04,
        "total": 102.04
      }
    ],
    "total": 102.04
  },
  {
    "id": "AA1449",
    "createdOn": new Date("2021-10-7").toISOString(),
    "paymentDue": new Date("2021-10-14").toISOString(),
    "description": "Re-branding",
    "paymentTerms": 7,
    "clientName": "Mellisa Clarke",
    "clientEmail": "mellisa.clarke@example.com",
    "status": InvoiceStatusEnum.PENDING,
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "46 Abbey Row",
      "city": "Cambridge",
      "postCode": "CB5 6EG",
      "country": "United Kingdom"
    },
    "items": [
      {
        "id": "249450a0-1b56-4dbc-87ad-9850320f6ca8",
        "name": "New Logo",
        "quantity": 1,
        "price": 1532.33,
        "total": 1532.33
      },
      {
        "id": "249220a0-1d56-4dbb-87ae-9850420f6ca8",
        "name": "Brand Guidelines",
        "quantity": 1,
        "price": 2500.00,
        "total": 2500.00
      }
    ],
    "total": 4032.33
  },
  {
    "id": "TY9141",
    "createdOn": new Date("2021-10-01").toISOString(),
    "paymentDue": new Date("2021-10-31").toISOString(),
    "description": "Landing Page Design",
    "paymentTerms": 30,
    "clientName": "Thomas Wayne",
    "clientEmail": "thomas@dc.com",
    "status": InvoiceStatusEnum.PENDING,
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "3964  Queens Lane",
      "city": "Gotham",
      "postCode": "60457",
      "country": "United States of America"
    },
    "items": [
      {
        "id": "249220a0-1b52-4dba-87ad-9850321f6ca8",
        "name": "Web Design",
        "quantity": 1,
        "price": 6155.91,
        "total": 6155.91
      }
    ],
    "total": 6155.91
  },
  {
    "id": "FV2353",
    "createdOn": new Date("2021-11-05").toISOString(),
    "paymentDue": new Date("2021-11-12").toISOString(),
    "description": "Logo Re-design",
    "paymentTerms": 7,
    "clientName": "Anita Wainwright",
    "clientEmail": "",
    "status": InvoiceStatusEnum.DRAFT,
    "senderAddress": {
      "street": "19 Union Terrace",
      "city": "London",
      "postCode": "E1 3EZ",
      "country": "United Kingdom"
    },
    "clientAddress": {
      "street": "",
      "city": "",
      "postCode": "",
      "country": ""
    },
    "items": [
      {
        "id": "249520a0-1b66-4dbf-87ad-9850320f6ca8",
        "name": "Logo Re-design",
        "quantity": 1,
        "price": 3102.04,
        "total": 3102.04
      }
    ],
    "total": 3102.04
  }
];

