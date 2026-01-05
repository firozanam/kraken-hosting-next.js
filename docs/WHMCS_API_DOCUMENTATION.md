# Comprehensive WHMCS API Documentation

Based on my analysis of the WebblyHost application, I've created a comprehensive documentation of the WHMCS API integration. This application uses WHMCS as a backend service for managing clients, products, domains, billing, and support tickets.

## Overview

The WebblyHost application integrates with WHMCS through its API to provide a modern client and admin portal. The integration is handled through a centralized `whmcsApi` function that manages all communication with the WHMCS API.

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
    responsetype: 'json',
    ...params,
  };

  try {
    const response = await axios.post(
      API_URL,
      new URLSearchParams(postData as any).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        httpsAgent: new (require('https').Agent)({
          rejectUnauthorized: false
        }),
      }
    );

    if (response.data.result === 'error') {
      throw new Error(response.data.message);
    }

    return response.data;
  } catch (error: any) {
    console.error(`WHMCS API Error [${action}]:`, error.response?.data || error.message);
    throw error;
  }
};
```

## WHMCS API Endpoints Used

### Authentication & User Management

#### `ValidateLogin`
- **Purpose**: Authenticate user credentials
- **Parameters**:
  - `email`: User email
  - `password2`: User password
- **Returns**: User ID and validation result
- **Usage**: Used in login process to validate user credentials against WHMCS

#### `GetClientsDetails`
- **Purpose**: Retrieve detailed information about a specific client
- **Parameters**:
  - `clientid`: Client ID
  - `stats`: Include statistics (optional)
- **Returns**: Client details including personal information, statistics, and account status
- **Usage**: Used to fetch client information for dashboard displays

### Client Management

#### `GetClients`
- **Purpose**: Retrieve list of clients
- **Parameters**:
  - `limitnum`: Number of results to return
  - `orderby`: Field to order by
  - `order`: Sort order (asc/desc)
  - `stats`: Include statistics (optional)
- **Returns**: List of clients with their information
- **Usage**: Used in admin panel to display all clients

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

#### `DeleteClient`
- **Purpose**: Delete a client account
- **Parameters**:
  - `clientid`: Client ID to delete
- **Returns**: Result of the deletion operation
- **Usage**: Used to remove client accounts from WHMCS

### Product & Service Management

#### `GetClientsProducts`
- **Purpose**: Retrieve products/services for a client
- **Parameters**:
  - `clientid`: Client ID (optional for admin view)
  - `limitnum`: Number of results to return
  - `stats`: Include statistics (optional)
- **Returns**: List of products/services with details
- **Usage**: Used to display client services and admin service management

### Domain Management

#### `GetClientsDomains`
- **Purpose**: Retrieve domains for a client
- **Parameters**:
  - `clientid`: Client ID (optional for admin view)
  - `limitnum`: Number of results to return
  - `stats`: Include statistics (optional)
- **Returns**: List of domains with registration and renewal information
- **Usage**: Used to display client domains and admin domain management

#### `DomainWhois`
- **Purpose**: Check domain availability
- **Parameters**:
  - `domain`: Domain name to check
- **Returns**: Domain availability status
- **Usage**: Used for domain registration and availability checking

### Billing & Invoicing

#### `GetInvoices`
- **Purpose**: Retrieve invoices
- **Parameters**:
  - `userid`: User ID (optional for admin view)
  - `status`: Invoice status filter (e.g., 'Unpaid')
  - `limitnum`: Number of results to return
  - `orderby`: Field to order by
  - `order`: Sort order (asc/desc)
- **Returns**: List of invoices with payment status and amounts
- **Usage**: Used for billing management and displaying invoices

### Support Tickets

#### `GetTickets`
- **Purpose**: Retrieve support tickets
- **Parameters**:
  - `clientid`: Client ID (optional for admin view)
  - `limitnum`: Number of results to return
  - `ignore_dept_assignments`: Ignore department assignments (admin only)
- **Returns**: List of support tickets with status and details
- **Usage**: Used for support ticket management in both client and admin panels

## Additional WHMCS API Endpoints Used

### Admin-Specific Endpoints

#### `GetClients` (Admin View)
- **Purpose**: Retrieve all clients for admin management
- **Parameters**:
  - `limitnum`: Number of results to return (100 for admin)
  - `orderby`: Field to order by ('id')
  - `order`: Sort order ('desc')
- **Usage**: Used in admin client management page

#### `GetClientsProducts` (Admin View)
- **Purpose**: Retrieve all products/services for admin management
- **Parameters**:
  - `limitnum`: Number of results to return (100 for admin)
- **Usage**: Used in admin services management page

#### `GetClientsDomains` (Admin View)
- **Purpose**: Retrieve all domains for admin management
- **Parameters**:
  - `limitnum`: Number of results to return (100 for admin)
- **Usage**: Used in admin domains management page

#### `GetInvoices` (Admin View)
- **Purpose**: Retrieve all invoices for admin management
- **Parameters**:
  - `limitnum`: Number of results to return (100 for admin)
  - `orderby`: Field to order by ('id')
  - `order`: Sort order ('desc')
- **Usage**: Used in admin billing management page

#### `GetTickets` (Admin View)
- **Purpose**: Retrieve all tickets for admin management
- **Parameters**:
  - `limitnum`: Number of results to return (100 for admin)
  - `ignore_dept_assignments`: Ignore department assignments (true for admin)
- **Usage**: Used in admin support management page

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
import { whmcsApi } from '@/lib/whmcs';

// Get client details
const clientDetails = await whmcsApi('GetClientsDetails', { clientid: 123 });

// Get client's products
const products = await whmcsApi('GetClientsProducts', { clientid: 123 });

// Check domain availability
const domainCheck = await whmcsApi('DomainWhois', { domain: 'example.com' });
```

### Error Handling
```typescript
try {
  const result = await whmcsApi('GetClientsDetails', { clientid: userId });
  // Process result
} catch (error) {
  console.error('WHMCS API Error:', error);
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

This comprehensive integration allows the WebblyHost application to provide a modern, user-friendly interface while leveraging the powerful WHMCS backend for all business operations.