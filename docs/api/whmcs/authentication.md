# WHMCS API Authentication

This document explains the authentication flow for the WHMCS API integration in the Kraken Hosting platform.

## Overview

The WHMCS API integration implements two types of authentication:

1. Client authentication - for end users accessing their accounts
2. Admin authentication - for administrative functions

## Client Authentication Flow

The client authentication follows these steps:

1. User submits email and password via login form
2. Application calls `ValidateLogin` with user credentials
3. If successful, calls `GetClientsDetails` to verify client exists
4. Generates JWT token with user information
5. Sets session cookie with JWT token
6. Redirects to dashboard

### Client Authentication Code Example

```typescript
import { whmcsApi } from "@/lib/whmcs";

// Validate user credentials
const loginResult = await whmcsApi("ValidateLogin", {
  email: userEmail,
  password2: userPassword,
});

if (loginResult.userid) {
  // Get client details to verify account
  const clientDetails = await whmcsApi("GetClientsDetails", {
    clientid: loginResult.userid,
  });

  // Generate JWT token
  const token = jwt.sign(
    { userId: clientDetails.userid, email: clientDetails.email },
    process.env.JWT_SECRET,
    { expiresIn: "24h" },
  );

  // Set session cookie
  // ... set cookie logic
}
```

## Admin Authentication Flow

The admin authentication uses a separate system with a predefined password:

1. Admin submits admin password
2. System validates against predefined admin password
3. Generates separate admin JWT token
4. Provides access to admin panel with enhanced WHMCS API access

## Security Considerations

- All WHMCS API communication is done server-side to protect API credentials
- JWT tokens are used for session management
- HTTPS is enforced for API communication
- Input validation is performed using Zod schemas
- Sensitive API credentials are stored in environment variables

## Token Management

### Client Tokens

Client tokens are used for regular user operations and have limited permissions:

- Valid for 24 hours by default
- Include user ID and email
- Used for accessing client-specific data

### Admin Tokens

Admin tokens provide elevated permissions for administrative tasks:

- Valid for 8 hours by default
- Include admin role designation
- Used for accessing all WHMCS data and functions

## Error Handling

Authentication errors are handled as follows:

- Invalid credentials return appropriate error messages
- Expired tokens are refreshed automatically when possible
- Failed authentication attempts are logged for security monitoring
