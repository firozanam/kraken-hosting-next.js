# WHMCS API Configuration

This document explains the configuration requirements for the WHMCS API integration in the Kraken Hosting platform.

## Overview

The WHMCS API integration requires several configuration parameters to function properly. These are typically stored as environment variables.

## Required Environment Variables

### API Connection

```env
API_ENDPOINT= # WHMCS API endpoint URL (e.g., https://your-whmcs.com/includes/api.php)
API_IDENTIFIER= # WHMCS API identifier/username
API_SECRET= # WHMCS API secret/password
```

### Authentication

```env
JWT_SECRET= # Secret for client JWT tokens
ADMIN_JWT_SECRET= # Secret for admin JWT tokens
ADMIN_PASSWORD= # Admin panel password
```

## Optional Configuration

### API Settings

```env
API_TIMEOUT=30000 # API request timeout in milliseconds (default: 30000)
API_RETRY_ATTEMPTS=3 # Number of retry attempts for failed requests (default: 3)
API_CACHE_TTL=60 # Cache time-to-live in seconds (default: 60)
```

### Security Settings

```env
REQUIRE_SSL=true # Require SSL for API connections (default: true)
ALLOW_INSECURE_SSL=false # Allow insecure SSL certificates (default: false)
LOG_API_CALLS=true # Log all API calls (default: true)
```

## Configuration Examples

### Development Environment

```env
API_ENDPOINT=https://demo.whmcs.com/includes/api.php
API_IDENTIFIER=dev_user
API_SECRET=dev_secret
JWT_SECRET=dev_jwt_secret
ADMIN_JWT_SECRET=dev_admin_jwt_secret
ADMIN_PASSWORD=dev_admin_password
API_TIMEOUT=30000
API_RETRY_ATTEMPTS=2
API_CACHE_TTL=30
REQUIRE_SSL=false
ALLOW_INSECURE_SSL=true
LOG_API_CALLS=true
```

### Production Environment

```env
API_ENDPOINT=https://your-whmcs.com/includes/api.php
API_IDENTIFIER=prod_user
API_SECRET=prod_secret
JWT_SECRET=long_secure_jwt_secret
ADMIN_JWT_SECRET=long_secure_admin_jwt_secret
ADMIN_PASSWORD=very_secure_admin_password
API_TIMEOUT=30000
API_RETRY_ATTEMPTS=3
API_CACHE_TTL=300
REQUIRE_SSL=true
ALLOW_INSECURE_SSL=false
LOG_API_CALLS=true
```

## Configuration Validation

The system validates configuration on startup:

- Checks that all required environment variables are set
- Verifies API endpoint is accessible
- Tests API credentials with a simple API call
- Validates JWT secrets are of appropriate length

## Configuration Management Best Practices

### Security

- Store secrets in environment variables, not in code
- Use different secrets for development and production
- Rotate API credentials regularly
- Use strong, randomly generated secrets

### Performance

- Adjust cache TTL based on data update frequency
- Set appropriate timeout values based on network conditions
- Configure retry attempts based on API reliability

### Monitoring

- Enable API call logging in development
- Monitor API response times
- Track error rates and patterns
- Set up alerts for configuration changes
