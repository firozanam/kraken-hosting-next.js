# WHMCS API Data Models

This document describes the data models used in the WHMCS API integration for the Kraken Hosting platform.

## Overview

The WHMCS API integration works with several data models that represent entities in the WHMCS system. These models are used for both input and output of API calls.

## Client Data Model

The client data model represents a customer in the WHMCS system.

### Properties

- `id`: Client ID (number)
- `firstname`: First name (string)
- `lastname`: Last name (string)
- `email`: Email address (string)
- `address1`: Address line 1 (string)
- `city`: City (string)
- `state`: State/province (string)
- `postcode`: Postal code (string)
- `country`: Country code (string)
- `phonenumber`: Phone number (string)
- `datecreated`: Account creation date (string)
- `stats`: Client statistics object (object)

### Example

```json
{
  "id": 123,
  "firstname": "John",
  "lastname": "Doe",
  "email": "john.doe@example.com",
  "address1": "123 Main St",
  "city": "Anytown",
  "state": "NY",
  "postcode": "12345",
  "country": "US",
  "phonenumber": "+1.5551234567",
  "datecreated": "2023-01-15",
  "stats": {
    "numdueinvoices": 0,
    "dueamount": "0.00",
    "creditbalance": "0.00"
  }
}
```

## Product/Service Data Model

The product/service data model represents a product or service associated with a client.

### Properties

- `id`: Product ID (number)
- `clientid`: Client ID (number)
- `name`: Product name (string)
- `domain`: Associated domain (string)
- `status`: Service status (string: Active, Suspended, etc.)
- `regdate`: Registration date (string)
- `nextduedate`: Next due date (string)
- `billingcycle`: Billing cycle (string)
- `recurringamount`: Recurring amount (string)
- `currencycode`: Currency code (string)

### Example

```json
{
  "id": 456,
  "clientid": 123,
  "name": "Web Hosting Plan",
  "domain": "example.com",
  "status": "Active",
  "regdate": "2023-01-15",
  "nextduedate": "2024-01-15",
  "billingcycle": "Annually",
  "recurringamount": "99.00",
  "currencycode": "USD"
}
```

## Domain Data Model

The domain data model represents a domain registration in the WHMCS system.

### Properties

- `id`: Domain ID (number)
- `userid`: User ID (number)
- `domainname`: Domain name (string)
- `status`: Domain status (string: Active, Expired, etc.)
- `registrationdate`: Registration date (string)
- `nextduedate`: Next due date (string)
- `donotrenew`: Auto-renew setting (number: 0 for enabled, 1 for disabled)
- `registrar`: Domain registrar (string)

### Example

```json
{
  "id": 789,
  "userid": 123,
  "domainname": "example.com",
  "status": "Active",
  "registrationdate": "2023-01-15",
  "nextduedate": "2024-01-15",
  "donotrenew": 0,
  "registrar": "enom"
}
```

## Invoice Data Model

The invoice data model represents an invoice in the WHMCS system.

### Properties

- `id`: Invoice ID (number)
- `invoicenum`: Invoice number (string)
- `userid`: User ID (number)
- `date`: Invoice date (string)
- `duedate`: Due date (string)
- `total`: Total amount (string)
- `status`: Invoice status (string: Paid, Unpaid, etc.)

### Example

```json
{
  "id": 101,
  "invoicenum": "INV-001",
  "userid": 123,
  "date": "2023-01-15",
  "duedate": "2023-02-15",
  "total": "99.00",
  "status": "Unpaid"
}
```

## Ticket Data Model

The ticket data model represents a support ticket in the WHMCS system.

### Properties

- `id`: Ticket ID (number)
- `tid`: Ticket ID (display) (string)
- `userid`: User ID (number)
- `subject`: Ticket subject (string)
- `department`: Department name (string)
- `status`: Ticket status (string: Open, Answered, Closed, etc.)
- `lastreply`: Last reply date (string)

### Example

```json
{
  "id": 202,
  "tid": "TKT-001",
  "userid": 123,
  "subject": "Help with my account",
  "department": "General",
  "status": "Open",
  "lastreply": "2023-01-15 10:30:00"
}
```

## Data Transformation

The API integration may transform data between WHMCS format and application format:

- Date formats may be standardized
- Currency values may be converted
- Status values may be mapped to application-specific values
- Sensitive data may be filtered out

## Validation

All data models are validated before being sent to or after being received from the WHMCS API:

- Required fields are checked
- Data types are validated
- Format validation is performed where appropriate
- Business rules are enforced
