# WHMCS API Implementation Guide

This guide explains how to implement and use the WHMCS API integration in the Kraken Hosting platform.

## Overview

The WHMCS API integration is implemented through a centralized API wrapper that handles all communication with the WHMCS backend. This wrapper is responsible for:

- Authenticating with the WHMCS API
- Making API requests
- Handling responses and errors
- Managing session data

## Prerequisites

Before implementing the WHMCS API integration, ensure you have:

- A running WHMCS installation
- API credentials (identifier and secret)
- Proper environment variables configured

## Setup

### Environment Variables

The integration requires the following environment variables:

```env
API_ENDPOINT= # WHMCS API endpoint URL (e.g., https://your-whmcs.com/includes/api.php)
API_IDENTIFIER= # WHMCS API identifier/username
API_SECRET= # WHMCS API secret/password
JWT_SECRET= # Secret for client JWT tokens
ADMIN_JWT_SECRET= # Secret for admin JWT tokens
ADMIN_PASSWORD= # Admin panel password
```

## API Wrapper Implementation

The API wrapper is implemented in the `lib/whmcs.ts` file:

```typescript
export const whmcsApi = async (action: string, params: any = {}) => {
  const postData = {
    identifier: API_IDENTIFIER,
    secret: API_SECRET,
    action: action,
    responsetype: "json",
    ...params,
  };

  try {
    const response = await axios.post(
      API_URL,
      new URLSearchParams(postData as any).toString(),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        httpsAgent: new (require("https").Agent)({
          rejectUnauthorized: false,
        }),
      },
    );

    if (response.data.result === "error") {
      throw new Error(response.data.message);
    }

    return response.data;
  } catch (error: any) {
    console.error(
      `WHMCS API Error [${action}]:`,
      error.response?.data || error.message,
    );
    throw error;
  }
};
```

## Usage Examples

### Getting Client Details

```typescript
import { whmcsApi } from "@/lib/whmcs";

// Get client details
const clientDetails = await whmcsApi("GetClientsDetails", { clientid: 123 });

// Get multiple clients
const clients = await whmcsApi("GetClients", {
  limitnum: 50,
  orderby: "datecreated",
  order: "desc",
});
```

### Creating a New Client

```typescript
const newClient = await whmcsApi("AddClient", {
  firstname: "John",
  lastname: "Doe",
  email: "john.doe@example.com",
  address1: "123 Main St",
  city: "Anytown",
  state: "NY",
  postcode: "12345",
  country: "US",
  phonenumber: "555-123-4567",
  password2: "securePassword",
  clientip: "127.0.0.1",
});
```

### Managing Products and Services

```typescript
// Get client's products
const products = await whmcsApi("GetClientsProducts", {
  clientid: 123,
  limitnum: 100,
});

// Update a client's product
const updateResult = await whmcsApi("UpdateClientProduct", {
  serviceid: 456,
  nextduedate: "2024-12-31",
  status: "Active",
});
```

### Managing Domains

```typescript
// Get client's domains
const domains = await whmcsApi("GetClientsDomains", {
  clientid: 123,
  limitnum: 50,
});

// Check domain availability
const domainCheck = await whmcsApi("DomainWhois", {
  domain: "example.com",
});

// Update domain nameservers
const updateNameservers = await whmcsApi("DomainUpdateNameservers", {
  domainid: 789,
  ns1: "ns1.example.com",
  ns2: "ns2.example.com",
});
```

### Managing Billing and Invoices

```typescript
// Get client's invoices
const invoices = await whmcsApi("GetInvoices", {
  userid: 123,
  status: "Unpaid",
  limitnum: 25,
});

// Get a specific invoice
const invoice = await whmcsApi("GetInvoice", {
  invoiceid: 101,
});

// Apply a payment to an invoice
const paymentResult = await whmcsApi("AddInvoicePayment", {
  invoiceid: 101,
  transid: "TX123456",
  amount: "99.00",
  gateway: "paypal",
});
```

### Managing Support Tickets

```typescript
// Get client's tickets
const tickets = await whmcsApi("GetTickets", {
  clientid: 123,
  limitnum: 25,
});

// Create a new ticket
const newTicket = await whmcsApi("OpenTicket", {
  deptid: 1,
  subject: "Help with my service",
  message: "I need assistance with...",
  clientid: 123,
  priority: "Medium",
});

// Add a reply to a ticket
const replyResult = await whmcsApi("AddTicketReply", {
  ticketid: 202,
  reply: "Thank you for your message. We will look into this.",
});
```

### Managing Contacts

```typescript
// Get client's contacts
const contacts = await whmcsApi("GetContacts", {
  clientid: 123,
  limitnum: 25,
});

// Add a new contact
const newContact = await whmcsApi("AddContact", {
  clientid: 123,
  firstname: "Jane",
  lastname: "Doe",
  email: "jane.doe@example.com",
  subaccount: true,
  permissions:
    "profile,contacts,products,manageproducts,domains,managedomains,invoices,quotes,tickets,affiliates",
});
```

### Managing Quotes

```typescript
// Get quotes for a client
const quotes = await whmcsApi("GetQuotes", {
  userid: 123,
});

// Create a new quote
const newQuote = await whmcsApi("CreateQuote", {
  subject: "Web Hosting Package",
  stage: "Delivered",
  datecreated: "2023-01-15",
  validuntil: "2023-02-15",
  userid: 123,
  lineitems: [
    {
      description: "Web Hosting Plan",
      amount: "99.00",
      taxable: false,
    },
  ],
});
```

## Best Practices

- Always handle errors appropriately
- Use caching for frequently accessed data
- Implement proper authentication checks
- Log API calls for debugging purposes
- Follow security best practices for credential management
