# Invoice Management Application

A full-stack application for managing invoices with features like financial year categorization, validation rules, and timezone-aware authentication.

## Features

- 🔐 **User Authentication**
  - Secure login and signup with JWT
  - Timezone validation during login
  - Password encryption with bcrypt

- 📊 **Invoice Management**
  - Create, update, and delete invoices
  - Financial year categorization
  - Logical validation rules for invoice entries
  - Automatic invoice number generation

- 🔍 **Advanced Filtering**
  - Filter by financial year
  - Search by invoice number
  - Date range filtering
  - Status-based filtering

- 💼 **Business Features**
  - Client management
  - Payment tracking
  - Automatic reminders
  - Multi-currency support

## Tech Stack

### Frontend
- React with TypeScript
- TailwindCSS for styling
- React Router for navigation
- React Hook Form for form handling
- Zod for validation
- Lucide React for icons

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── auth/           # Authentication components
│   │   ├── invoice/        # Invoice-related components
│   │   └── shared/         # Shared UI components
│   ├── contexts/           # React contexts
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Page components
│   ├── services/          # API services
│   ├── types/             # TypeScript types
│   └── utils/             # Utility functions
├── server/
│   ├── controllers/       # Route controllers
│   ├── middleware/        # Express middleware
│   ├── models/           # Mongoose models
│   ├── routes/           # Express routes
│   └── utils/            # Server utilities
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   MONGODB_URI=mongodb://localhost:27017/invoice-app
   JWT_SECRET=your-secret-key
   PORT=3000
   ```

4. Start the development server:
   ```bash
   # Start frontend
   npm run dev

   # Start backend
   npm run server
   ```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create new user account
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Invoices
- `GET /api/invoices` - Get all invoices
- `POST /api/invoices` - Create new invoice
- `PUT /api/invoices/:id` - Update invoice
- `DELETE /api/invoices/:id` - Delete invoice
- `GET /api/invoices/filter` - Filter invoices

## Validation Rules

### Invoice Validation
- Unique invoice numbers per financial year
- Logical date alignment within financial year
- Required fields: invoice number, date, amount, client details
- Valid amount greater than 0

### User Validation
- Valid email format
- Password minimum length: 6 characters
- Required timezone information
- Unique email addresses

## Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Protected API routes
- Input validation and sanitization
- CORS configuration
- Rate limiting

## Testing

```bash
# Run frontend tests
npm run test

# Run backend tests
npm run test:server
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.