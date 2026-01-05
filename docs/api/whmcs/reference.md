# Comprehensive WHMCS API Documentation

This document outlines the complete WHMCS API integration for the Kraken Hosting platform. This application uses WHMCS as a backend service for managing clients, products, domains, billing, and support tickets.

## Overview

The Kraken Hosting application integrates with WHMCS through its API to provide a modern client and admin portal. The integration is handled through a centralized `whmcsApi` function that manages all communication with the WHMCS API.

## Configuration

### Environment Variables

The application requires the following environment variables to connect to WHMCS:

```env
API_ENDPOINT= # WHMCS API endpoint URL (e.g., https://your-whmcs.com/includes/api.php)
API_IDENTIFIER= # WHMCS API identifier/username
API_SECRET= # WHMCS API secret/password
JWT_SECRET= # Secret for client JWT tokens
ADMIN_JWT_SECRET= # Secret for admin JWT tokens
ADMIN_PASSWORD= # Admin panel password
```

## Core API Wrapper

### `whmcsApi` Function

Located in `lib/whmcs.ts`, this is the core function that handles all WHMCS API communication:

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
          rejectUnauthorized: process.env.ALLOW_INSECURE_SSL !== "true",
        }),
        timeout: parseInt(process.env.API_TIMEOUT || "30000", 10),
      },
    );

    if (response.data.result === "error") {
      throw new Error(response.data.message || `WHMCS API Error: ${action}`);
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

## Complete WHMCS API Endpoints Reference

### Client Management API

#### `AddClient`

- **Purpose**: Create a new client account
- **Parameters**:
  - `firstname`: First name
  - `lastname`: Last name
  - `email`: Email address
  - `address1`: Address line 1
  - `city`: City
  - `state`: State/province
  - `postcode`: Postal code
  - `country`: Country code
  - `phonenumber`: Phone number
  - `password2`: Password
  - `clientip`: Client IP address
  - `noemail`: Don't send welcome email (1/0)
- **Returns**: Client ID of the newly created client
- **Usage**: Used to register new clients in WHMCS

#### `GetClients`

- **Purpose**: Retrieve list of clients
- **Parameters**:
  - `limitstart`: Record to start at (default: 0)
  - `limitnum`: Number of results to return (default: 25)
  - `orderby`: Field to order by (id, firstname, lastname, email, datecreated)
  - `order`: Sort order (asc/desc)
  - `stats`: Include statistics (true/false)
- **Returns**: List of clients with their information
- **Usage**: Used in admin panel to display all clients

#### `GetClientsDetails`

- **Purpose**: Retrieve detailed information about a specific client
- **Parameters**:
  - `clientid`: Client ID
  - `email`: Email address (alternative to clientid)
  - `stats`: Include statistics (true/false)
- **Returns**: Client details including personal information, statistics, and account status
- **Usage**: Used to fetch client information for dashboard displays

#### `UpdateClient`

- **Purpose**: Modify client account details
- **Parameters**:
  - `clientid`: Client ID
  - All parameters from AddClient can be updated
- **Returns**: Result of the update operation
- **Usage**: Used to update client information

#### `DeleteClient`

- **Purpose**: Delete a client account
- **Parameters**:
  - `clientid`: Client ID to delete
- **Returns**: Result of the deletion operation
- **Usage**: Used to remove client accounts from WHMCS

#### `CloseClient`

- **Purpose**: Close a client account
- **Parameters**:
  - `clientid`: Client ID to close
- **Returns**: Result of the closure operation
- **Usage**: Used to close client accounts

#### `GetClientsProducts`

- **Purpose**: Retrieve products/services for a client
- **Parameters**:
  - `clientid`: Client ID (optional for admin view)
  - `serviceid`: Specific service ID (optional)
  - `pid`: Product ID (optional)
  - `domain`: Domain name (optional)
  - `username`: Service username (optional)
  - `limitstart`: Record to start at (default: 0)
  - `limitnum`: Number of results to return (default: 25)
  - `stats`: Include statistics (true/false)
- **Returns**: List of products/services with details
- **Usage**: Used to display client services and admin service management

#### `GetClientsDomains`

- **Purpose**: Retrieve domains for a client
- **Parameters**:
  - `clientid`: Client ID (optional for admin view)
  - `domainid`: Specific domain ID (optional)
  - `domain`: Domain name (optional)
  - `limitstart`: Record to start at (default: 0)
  - `limitnum`: Number of results to return (default: 25)
  - `stats`: Include statistics (true/false)
- **Returns**: List of domains with registration and renewal information
- **Usage**: Used to display client domains and admin domain management

#### `GetEmails`

- **Purpose**: Retrieve emails sent to a client
- **Parameters**:
  - `clientid`: Client ID
  - `limitstart`: Record to start at (default: 0)
  - `limitnum`: Number of results to return (default: 25)
- **Returns**: List of emails sent to the client
- **Usage**: Used to view email history for a client

#### `GetClientGroups`

- **Purpose**: Retrieve client groups
- **Parameters**: None
- **Returns**: List of client groups
- **Usage**: Used to manage client groups

### Contact Management API

#### `AddContact`

- **Purpose**: Add a new contact for a client
- **Parameters**:
  - `clientid`: Client ID
  - `firstname`: First name
  - `lastname`: Last name
  - `email`: Email address
  - `address1`: Address line 1
  - `city`: City
  - `state`: State/province
  - `postcode`: Postal code
  - `country`: Country code
  - `phonenumber`: Phone number
  - `subaccount`: Is a sub-account (true/false)
  - `permissions`: Comma-separated list of permissions
- **Returns**: Contact ID of the newly created contact
- **Usage**: Used to add contacts for a client

#### `GetContacts`

- **Purpose**: Retrieve contacts for a client
- **Parameters**:
  - `clientid`: Client ID
  - `limitstart`: Record to start at (default: 0)
  - `limitnum`: Number of results to return (default: 25)
- **Returns**: List of contacts for the client
- **Usage**: Used to display contacts for a client

#### `UpdateContact`

- **Purpose**: Modify contact details
- **Parameters**:
  - `contactid`: Contact ID
  - All parameters from AddContact can be updated
- **Returns**: Result of the update operation
- **Usage**: Used to update contact information

#### `DeleteContact`

- **Purpose**: Remove a contact
- **Parameters**:
  - `contactid`: Contact ID to delete
- **Returns**: Result of the deletion operation
- **Usage**: Used to remove a contact

### Billing & Invoicing API

#### `GetInvoices`

- **Purpose**: Retrieve invoices
- **Parameters**:
  - `userid`: User ID (optional for admin view)
  - `status`: Invoice status filter (Unpaid, Paid, Cancelled, Refunded, Collections)
  - `limitstart`: Record to start at (default: 0)
  - `limitnum`: Number of results to return (default: 25)
  - `orderby`: Field to order by (id, invoicenum, date, duedate, total)
  - `order`: Sort order (asc/desc)
- **Returns**: List of invoices with payment status and amounts
- **Usage**: Used for billing management and displaying invoices

#### `GetInvoice`

- **Purpose**: Get details of a specific invoice
- **Parameters**:
  - `invoiceid`: Invoice ID
- **Returns**: Detailed information about the invoice
- **Usage**: Used to display detailed invoice information

#### `CreateInvoice`

- **Purpose**: Generate a new invoice
- **Parameters**:
  - `userid`: User ID
  - `date`: Invoice date (YYYY-MM-DD)
  - `duedate`: Due date (YYYY-MM-DD)
  - `paymentmethod`: Payment method
  - `sendinvoice`: Send invoice notification (true/false)
  - `status`: Invoice status (Unpaid, Paid, Cancelled, Refunded, Collections)
  - `itemdescription`: Array of item descriptions
  - `itemamount`: Array of item amounts
  - `itemtaxed`: Array of tax flags (true/false)
- **Returns**: Invoice ID of the newly created invoice
- **Usage**: Used to create new invoices

#### `UpdateInvoice`

- **Purpose**: Modify an existing invoice
- **Parameters**:
  - `invoiceid`: Invoice ID
  - All parameters from CreateInvoice can be updated
- **Returns**: Result of the update operation
- **Usage**: Used to update invoice information

#### `AddInvoicePayment`

- **Purpose**: Apply a payment to an invoice
- **Parameters**:
  - `invoiceid`: Invoice ID
  - `transid`: Transaction ID
  - `amount`: Payment amount
  - `gateway`: Payment gateway
  - `date`: Payment date (YYYY-MM-DD HH:MM:SS)
- **Returns**: Result of the payment application
- **Usage**: Used to record payments against invoices

#### `GetTransactions`

- **Purpose**: Retrieve transaction records
- **Parameters**:
  - `clientid`: Client ID (optional)
  - `invoiceid`: Invoice ID (optional)
  - `transid`: Transaction ID (optional)
  - `limitstart`: Record to start at (default: 0)
  - `limitnum`: Number of results to return (default: 25)
  - `orderby`: Field to order by (date, amount)
  - `order`: Sort order (asc/desc)
- **Returns**: List of transaction records
- **Usage**: Used to view transaction history

#### `AddTransaction`

- **Purpose**: Add a transaction record
- **Parameters**:
  - `userid`: User ID
  - `description`: Transaction description
  - `amountin`: Amount in (positive value)
  - `amountout`: Amount out (positive value)
  - `invoiceid`: Invoice ID
  - `date`: Transaction date (YYYY-MM-DD HH:MM:SS)
  - `gateway`: Payment gateway
  - `transid`: Transaction ID
  - `fees`: Transaction fees
  - `netamount`: Net amount
- **Returns**: Transaction ID of the newly created transaction
- **Usage**: Used to add manual transaction records

#### `AddCredit`

- **Purpose**: Add credit to a client account
- **Parameters**:
  - `clientid`: Client ID
  - `description`: Credit description
  - `amount`: Credit amount
- **Returns**: Result of the credit addition
- **Usage**: Used to add credit to a client account

#### `GetCredits`

- **Purpose**: Get credit information for a client
- **Parameters**:
  - `clientid`: Client ID
- **Returns**: List of credits for the client
- **Usage**: Used to view credit history for a client

### Domain Management API

#### `DomainWhois`

- **Purpose**: Check domain availability
- **Parameters**:
  - `domain`: Domain name to check
- **Returns**: Domain availability status
- **Usage**: Used for domain registration and availability checking

#### `DomainGetWhoisInfo`

- **Purpose**: Get WHOIS information for a domain
- **Parameters**:
  - `domainid`: Domain ID
- **Returns**: WHOIS information for the domain
- **Usage**: Used to retrieve WHOIS information

#### `DomainGetLockingStatus`

- **Purpose**: Get domain lock status
- **Parameters**:
  - `domainid`: Domain ID
- **Returns**: Domain lock status
- **Usage**: Used to check domain lock status

#### `DomainGetNameservers`

- **Purpose**: Get nameservers for a domain
- **Parameters**:
  - `domainid`: Domain ID
- **Returns**: Nameservers for the domain
- **Usage**: Used to retrieve domain nameservers

#### `DomainUpdateWhoisInfo`

- **Purpose**: Update WHOIS information
- **Parameters**:
  - `domainid`: Domain ID
  - `contactdetails`: Array of contact details
- **Returns**: Result of the update operation
- **Usage**: Used to update WHOIS information

#### `DomainUpdateLockingStatus`

- **Purpose**: Update domain lock status
- **Parameters**:
  - `domainid`: Domain ID
  - `lockstatus`: Lock status (true/false)
- **Returns**: Result of the update operation
- **Usage**: Used to update domain lock status

#### `DomainUpdateNameservers`

- **Purpose**: Update nameservers
- **Parameters**:
  - `domainid`: Domain ID
  - `ns1`: Nameserver 1
  - `ns2`: Nameserver 2
  - `ns3`: Nameserver 3
  - `ns4`: Nameserver 4
  - `ns5`: Nameserver 5
- **Returns**: Result of the update operation
- **Usage**: Used to update domain nameservers

#### `DomainToggleIdProtect`

- **Purpose**: Toggle ID protection
- **Parameters**:
  - `domainid`: Domain ID
  - `protectenable`: Enable/disable protection (true/false)
- **Returns**: Result of the toggle operation
- **Usage**: Used to toggle ID protection

#### `DomainRegister`

- **Purpose**: Register a new domain
- **Parameters**:
  - `domain`: Domain name
  - `regtype`: Registration type (register/transfer)
  - `regperiod`: Registration period
  - `paymentmethod`: Payment method
  - `contactdetails`: Array of contact details
  - `dnsmanagement`: Enable DNS management (true/false)
  - `emailforwarding`: Enable email forwarding (true/false)
  - `idprotection`: Enable ID protection (true/false)
  - `nameservers`: Array of nameservers
- **Returns**: Result of the registration operation
- **Usage**: Used to register new domains

#### `DomainTransfer`

- **Purpose**: Initiate a domain transfer
- **Parameters**:
  - `domain`: Domain name
  - `regperiod`: Registration period
  - `paymentmethod`: Payment method
  - `contactdetails`: Array of contact details
  - `dnsmanagement`: Enable DNS management (true/false)
  - `emailforwarding`: Enable email forwarding (true/false)
  - `idprotection`: Enable ID protection (true/false)
  - `nameservers`: Array of nameservers
  - `eppcode`: EPP code for transfer
- **Returns**: Result of the transfer operation
- **Usage**: Used to initiate domain transfers

#### `DomainRenew`

- **Purpose**: Renew a domain
- **Parameters**:
  - `domainid`: Domain ID
  - `regperiod`: Registration period
  - `paymentmethod`: Payment method
- **Returns**: Result of the renewal operation
- **Usage**: Used to renew domains

#### `DomainRequestEPP`

- **Purpose**: Request EPP code for a domain
- **Parameters**:
  - `domainid`: Domain ID
- **Returns**: EPP code for the domain
- **Usage**: Used to request EPP codes for domain transfers

#### `GetRegistrars`

- **Purpose**: Get available registrars
- **Parameters**: None
- **Returns**: List of available registrars
- **Usage**: Used to view available registrars

#### `GetTLDPricing`

- **Purpose**: Get pricing for TLDs
- **Parameters**: None
- **Returns**: Pricing information for TLDs
- **Usage**: Used to view TLD pricing

### Support Tickets API

#### `OpenTicket`

- **Purpose**: Create a new support ticket
- **Parameters**:
  - `deptid`: Department ID
  - `subject`: Ticket subject
  - `message`: Ticket message
  - `clientid`: Client ID (optional)
  - `contactid`: Contact ID (optional)
  - `name`: Name (if not using clientid)
  - `email`: Email (if not using clientid)
  - `priority`: Priority (Low, Medium, High, Urgent)
  - `serviceid`: Service ID (optional)
  - `domainid`: Domain ID (optional)
- **Returns**: Ticket ID of the newly created ticket
- **Usage**: Used to create new support tickets

#### `GetTickets`

- **Purpose**: Retrieve a list of tickets
- **Parameters**:
  - `clientid`: Client ID (optional for admin view)
  - `deptid`: Department ID (optional)
  - `status`: Ticket status (optional)
  - `subject`: Subject search term (optional)
  - `limitstart`: Record to start at (default: 0)
  - `limitnum`: Number of results to return (default: 25)
  - `ignore_dept_assignments`: Ignore department assignments (admin only)
- **Returns**: List of support tickets with status and details
- **Usage**: Used for support ticket management in both client and admin panels

#### `GetTicket`

- **Purpose**: Get details of a specific ticket
- **Parameters**:
  - `ticketid`: Ticket ID
  - `password`: Ticket password (if not using clientid)
- **Returns**: Detailed information about the ticket
- **Usage**: Used to display detailed ticket information

#### `UpdateTicket`

- **Purpose**: Modify a ticket
- **Parameters**:
  - `ticketid`: Ticket ID
  - `deptid`: Department ID
  - `status`: Ticket status
  - `priority`: Priority
  - `subject`: Ticket subject
  - `flag`: Admin ID to flag the ticket to
- **Returns**: Result of the update operation
- **Usage**: Used to update ticket information

#### `AddTicketReply`

- **Purpose**: Add a reply to a ticket
- **Parameters**:
  - `ticketid`: Ticket ID
  - `reply`: Reply message
  - `markdown`: Use markdown formatting (true/false)
  - `adminusername`: Admin username (if replying as admin)
  - `clientid`: Client ID (if replying as client)
  - `contactid`: Contact ID (if replying as contact)
- **Returns**: Result of the reply addition
- **Usage**: Used to add replies to tickets

#### `GetTicketNotes`

- **Purpose**: Retrieve ticket notes
- **Parameters**:
  - `ticketid`: Ticket ID
- **Returns**: List of notes for the ticket
- **Usage**: Used to view ticket notes

#### `GetTicketCounts`

- **Purpose**: Get ticket counts by status
- **Parameters**: None
- **Returns**: Counts of tickets by status
- **Usage**: Used to get ticket statistics

#### `GetSupportStatuses`

- **Purpose**: Get ticket statuses
- **Parameters**: None
- **Returns**: List of available ticket statuses
- **Usage**: Used to get available ticket statuses

#### `GetSupportDepartments`

- **Purpose**: Get support departments
- **Parameters**: None
- **Returns**: List of support departments
- **Usage**: Used to get available support departments

#### `GetTicketPredefinedReplies`

- **Purpose**: Get predefined ticket replies
- **Parameters**: None
- **Returns**: List of predefined ticket replies
- **Usage**: Used to get predefined replies for tickets

#### `GetTicketPredefinedCats`

- **Purpose**: Get predefined ticket categories
- **Parameters**: None
- **Returns**: List of predefined ticket categories
- **Usage**: Used to get predefined categories for tickets

### Authentication & User Management

#### `ValidateLogin`

- **Purpose**: Authenticate user credentials
- **Parameters**:
  - `email`: User email
  - `password2`: User password
- **Returns**: User ID and validation result
- **Usage**: Used in login process to validate user credentials against WHMCS

#### `SendEmail`

- **Purpose**: Send an email to a client
- **Parameters**:
  - `messagename`: Message name from the predefined list
  - `customtype`: Custom type (general, product, domain, invoice, support)
  - `customsubject`: Custom subject (if using customtype)
  - `custommessage`: Custom message (if using customtype)
  - `id`: ID of the item to send the email for (based on customtype)
  - `mergefields`: Array of merge fields
- **Returns**: Result of the email sending operation
- **Usage**: Used to send emails to clients

### Product & Service Management

#### `GetProducts`

- **Purpose**: Retrieve a list of products
- **Parameters**:
  - `pid`: Product ID (optional)
  - `gid`: Group ID (optional)
  - `module`: Module name (optional)
- **Returns**: List of products with details
- **Usage**: Used to display available products

#### `GetProductAddons`

- **Purpose**: Retrieve addons for products
- **Parameters**:
  - `pid`: Product ID (optional)
  - `addonid`: Addon ID (optional)
- **Returns**: List of product addons
- **Usage**: Used to display available addons

#### `GetClientsAddons`

- **Purpose**: Retrieve addons for a client
- **Parameters**:
  - `clientid`: Client ID (optional for admin view)
  - `serviceid`: Service ID (optional)
  - `addonid`: Addon ID (optional)
  - `limitstart`: Record to start at (default: 0)
  - `limitnum`: Number of results to return (default: 25)
- **Returns**: List of addons for the client
- **Usage**: Used to display client addons

#### `UpdateClientProduct`

- **Purpose**: Update a client's product/service
- **Parameters**:
  - `serviceid`: Service ID
  - `pid`: Product ID
  - `serverid`: Server ID
  - `nextduedate`: Next due date (YYYY-MM-DD)
  - `nextinvoicedate`: Next invoice date (YYYY-MM-DD)
  - `domain`: Domain name
  - `firstpaymentamount`: First payment amount
  - `recurringamount`: Recurring amount
  - `billingcycle`: Billing cycle
  - `paymentmethod`: Payment method
  - `status`: Status
  - `serviceusername`: Service username
  - `servicepassword`: Service password
  - `subscriptionid`: Subscription ID
  - `promoid`: Promo ID
  - `overideautosuspend`: Override auto-suspend (on/off)
  - `overidesuspenduntil`: Override suspend until (YYYY-MM-DD)
  - `ns1`: Nameserver 1
  - `ns2`: Nameserver 2
  - `dedicatedip`: Dedicated IP
  - `assignedips`: Assigned IPs
  - `notes`: Notes
  - `diskusage`: Disk usage
  - `disklimit`: Disk limit
  - `bwusage`: Bandwidth usage
  - `bwlimit`: Bandwidth limit
  - `suspendreason`: Suspend reason
  - `unset`: Comma-separated list of fields to unset
- **Returns**: Result of the update operation
- **Usage**: Used to update client product/service details

#### `ModuleChangePackage`

- **Purpose**: Change package for a service
- **Parameters**:
  - `serviceid`: Service ID
  - `pid`: New product ID
- **Returns**: Result of the package change
- **Usage**: Used to change packages for services

#### `ModuleSuspend`

- **Purpose**: Suspend a service
- **Parameters**:
  - `serviceid`: Service ID
  - `suspendreason`: Suspend reason
- **Returns**: Result of the suspension
- **Usage**: Used to suspend services

#### `ModuleUnsuspend`

- **Purpose**: Unsuspend a service
- **Parameters**:
  - `serviceid`: Service ID
- **Returns**: Result of the unsuspension
- **Usage**: Used to unsuspend services

#### `ModuleTerminate`

- **Purpose**: Terminate a service
- **Parameters**:
  - `serviceid`: Service ID
- **Returns**: Result of the termination
- **Usage**: Used to terminate services

### Quote Management API

#### `GetQuotes`

- **Purpose**: Retrieve quotes
- **Parameters**:
  - `limitstart`: Record to start at (default: 0)
  - `limitnum`: Number of results to return (default: 25)
  - `id`: Specific quote ID (optional)
  - `userid`: User ID (optional)
- **Returns**: List of quotes
- **Usage**: Used to view quotes

#### `CreateQuote`

- **Purpose**: Create a new quote
- **Parameters**:
  - `subject`: Quote subject
  - `stage`: Quote stage (Draft, Delivered, On Hold, Lost, Accepted)
  - `datecreated`: Creation date (YYYY-MM-DD)
  - `validuntil`: Valid until date (YYYY-MM-DD)
  - `lineitems`: Array of line items
  - `userid`: User ID
  - `firstname`: First name
  - `lastname`: Last name
  - `companyname`: Company name
  - `email`: Email
  - `address1`: Address line 1
  - `address2`: Address line 2
  - `city`: City
  - `state`: State
  - `postcode`: Postal code
  - `country`: Country
  - `phonenumber`: Phone number
  - `currency`: Currency ID
- **Returns**: Quote ID of the newly created quote
- **Usage**: Used to create new quotes

#### `UpdateQuote`

- **Purpose**: Modify an existing quote
- **Parameters**:
  - `quoteid`: Quote ID
  - All parameters from CreateQuote can be updated
- **Returns**: Result of the update operation
- **Usage**: Used to update quote information

#### `DeleteQuote`

- **Purpose**: Delete a quote
- **Parameters**:
  - `quoteid`: Quote ID to delete
- **Returns**: Result of the deletion operation
- **Usage**: Used to delete quotes

#### `AcceptQuote`

- **Purpose**: Accept a quote
- **Parameters**:
  - `quoteid`: Quote ID
- **Returns**: Result of the acceptance operation
- **Usage**: Used to accept quotes

#### `SendQuote`

- **Purpose**: Send a quote to a client
- **Parameters**:
  - `quoteid`: Quote ID
- **Returns**: Result of the send operation
- **Usage**: Used to send quotes to clients

### Payment Methods API

#### `GetPayMethods`

- **Purpose**: Retrieve payment methods for a client
- **Parameters**:
  - `clientid`: Client ID
- **Returns**: List of payment methods for the client
- **Usage**: Used to view client payment methods

#### `AddPayMethod`

- **Purpose**: Add a payment method for a client
- **Parameters**:
  - `clientid`: Client ID
  - `gateway`: Gateway name
  - `card_type`: Card type
  - `card_last_four`: Last four digits of card
  - `card_expiry_date`: Card expiry date (MMYY format)
  - `billing_name`: Billing name
  - `billing_address`: Billing address
  - `billing_city`: Billing city
  - `billing_state`: Billing state
  - `billing_postcode`: Billing postcode
  - `billing_country`: Billing country
  - `billing_email`: Billing email
  - `billing_phone`: Billing phone
- **Returns**: Payment method ID of the newly added method
- **Usage**: Used to add payment methods for clients

#### `UpdatePayMethod`

- **Purpose**: Update a payment method
- **Parameters**:
  - `paymethod_id`: Payment method ID
  - All parameters from AddPayMethod can be updated
- **Returns**: Result of the update operation
- **Usage**: Used to update payment methods

#### `DeletePayMethod`

- **Purpose**: Remove a payment method
- **Parameters**:
  - `paymethod_id`: Payment method ID to delete
- **Returns**: Result of the deletion operation
- **Usage**: Used to remove payment methods

### Announcement Management

#### `AddAnnouncement`

- **Purpose**: Create an announcement
- **Parameters**:
  - `date`: Announcement date (YYYY-MM-DD)
  - `title`: Announcement title
  - `announcement`: Announcement content
  - `published`: Publish status (true/false)
- **Returns**: Announcement ID of the newly created announcement
- **Usage**: Used to create announcements

#### `UpdateAnnouncement`

- **Purpose**: Update an announcement
- **Parameters**:
  - `announcementid`: Announcement ID
  - All parameters from AddAnnouncement can be updated
- **Returns**: Result of the update operation
- **Usage**: Used to update announcements

#### `DeleteAnnouncement`

- **Purpose**: Remove an announcement
- **Parameters**:
  - `announcementid`: Announcement ID to delete
- **Returns**: Result of the deletion operation
- **Usage**: Used to remove announcements

#### `GetAnnouncements`

- **Purpose**: Retrieve announcements
- **Parameters**:
  - `limitstart`: Record to start at (default: 0)
  - `limitnum`: Number of results to return (default: 25)
  - `orderby`: Field to order by (date, title)
  - `order`: Sort order (asc/desc)
- **Returns**: List of announcements
- **Usage**: Used to view announcements

### Additional Management Functions

#### `AddClientNote`

- **Purpose**: Add a note to a client profile
- **Parameters**:
  - `clientid`: Client ID
  - `notes`: Note content
- **Returns**: Result of the note addition
- **Usage**: Used to add notes to client profiles

#### `AddCancelRequest`

- **Purpose**: Add a cancellation request
- **Parameters**:
  - `serviceid`: Service ID
  - `type`: Cancellation type (Immediate, End of Billing Period)
  - `reason`: Cancellation reason
- **Returns**: Result of the cancellation request
- **Usage**: Used to add cancellation requests

#### `GetPromoCodes`

- **Purpose**: Retrieve promo codes
- **Parameters**:
  - `id`: Specific promo code ID (optional)
  - `code`: Specific promo code (optional)
- **Returns**: List of promo codes
- **Usage**: Used to view promo codes

## Authentication Flow

### Client Authentication

1. User submits email and password via login form
2. Application calls `ValidateLogin` with user credentials
3. If successful, calls `GetClientsDetails` to verify client exists
4. Generates JWT token with user information
5. Sets session cookie with JWT token
6. Redirects to dashboard

### Admin Authentication

- Uses a separate admin authentication system with a predefined password
- Generates separate admin JWT token
- Provides access to admin panel with enhanced WHMCS API access

## Data Models and Response Formats

### Client Data Model

The `GetClientsDetails` API returns a client object with the following structure:

- `id`: Client ID
- `firstname`: First name
- `lastname`: Last name
- `email`: Email address
- `address1`: Address line 1
- `city`: City
- `state`: State/province
- `postcode`: Postal code
- `country`: Country code
- `phonenumber`: Phone number
- `datecreated`: Account creation date
- `stats`: Client statistics object

### Product/Service Data Model

The `GetClientsProducts` API returns a product object with the following structure:

- `id`: Product ID
- `clientid`: Client ID
- `name`: Product name
- `domain`: Associated domain
- `status`: Service status (Active, Suspended, etc.)
- `regdate`: Registration date
- `nextduedate`: Next due date
- `billingcycle`: Billing cycle
- `recurringamount`: Recurring amount
- `currencycode`: Currency code

### Domain Data Model

The `GetClientsDomains` API returns a domain object with the following structure:

- `id`: Domain ID
- `userid`: User ID
- `domainname`: Domain name
- `status`: Domain status (Active, Expired, etc.)
- `registrationdate`: Registration date
- `nextduedate`: Next due date
- `donotrenew`: Auto-renew setting (0 for enabled, 1 for disabled)
- `registrar`: Domain registrar

### Invoice Data Model

The `GetInvoices` API returns an invoice object with the following structure:

- `id`: Invoice ID
- `invoicenum`: Invoice number
- `userid`: User ID
- `date`: Invoice date
- `duedate`: Due date
- `total`: Total amount
- `status`: Invoice status (Paid, Unpaid, etc.)

### Ticket Data Model

The `GetTickets` API returns a ticket object with the following structure:

- `id`: Ticket ID
- `tid`: Ticket ID (display)
- `userid`: User ID
- `subject`: Ticket subject
- `department`: Department name
- `status`: Ticket status (Open, Answered, Closed, etc.)
- `lastreply`: Last reply date

## Error Handling

The WHMCS API wrapper includes comprehensive error handling:

- Catches API errors and logs them with the action name
- Throws errors that can be handled by calling functions
- Provides meaningful error messages to users
- Handles cases where clients may have been deleted from WHMCS

## Security Considerations

- All WHMCS API communication is done server-side to protect API credentials
- JWT tokens are used for session management
- HTTPS is enforced for API communication (with option to disable certificate validation)
- Input validation is performed using Zod schemas
- Sensitive API credentials are stored in environment variables

## Usage Examples

### Basic API Call

```typescript
import { whmcsApi } from "@/lib/whmcs";

// Get client details
const clientDetails = await whmcsApi("GetClientsDetails", { clientid: 123 });

// Get client's products
const products = await whmcsApi("GetClientsProducts", { clientid: 123 });

// Check domain availability
const domainCheck = await whmcsApi("DomainWhois", { domain: "example.com" });
```

### Error Handling

```typescript
try {
  const result = await whmcsApi("GetClientsDetails", { clientid: userId });
  // Process result
} catch (error) {
  console.error("WHMCS API Error:", error);
  // Handle error appropriately
}
```

## Common Use Cases

### Client Portal Features

- Dashboard with service, domain, and billing statistics
- Service management (view, renew, upgrade)
- Domain management (registration, DNS settings, renewals)
- Billing and invoice management
- Support ticket creation and tracking

### Admin Portal Features

- Client management (view, add, delete)
- Service management across all clients
- Domain management across all clients
- Billing and invoice management
- Support ticket management

## Caching Strategy

The application implements caching for better performance:

- Uses Next.js `unstable_cache` for API responses
- Cache duration is typically 60 seconds
- Tags are used for cache invalidation
- Parallel API calls are made where possible to improve performance

## API Response Structure

All WHMCS API responses follow this structure:

- `result`: 'success' or 'error'
- `message`: Error message (if applicable)
- Specific data fields depending on the API action

This comprehensive integration allows the Kraken Hosting application to provide a modern, user-friendly interface while leveraging the powerful WHMCS backend for all business operations.
