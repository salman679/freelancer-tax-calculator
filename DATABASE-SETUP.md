# Database Integration Guide

This guide explains how to set up and integrate the SQLite database with your Tax Calculator application using Prisma.

## Overview

Your application uses:

- **Database**: SQLite (file-based, no server required)
- **ORM**: Prisma v7.2.0
- **Adapter**: @prisma/adapter-libsql
- **Tables**: Calculation (simplified, no user accounts)

## Current Setup Status

✅ Database schema defined in `prisma/schema.prisma`
✅ Prisma Client configured in `src/lib/prisma.ts`
✅ Environment variables configured
✅ Migrations created and applied
✅ Database file created at `dev.db`
✅ **FREE VERSION**: No signup required, everything is free to use

---

## Step-by-Step Integration Process

### Step 1: Environment Configuration

**File: `.env.local`**

```env
DATABASE_URL="file:./prisma/dev.db"
```

This tells Prisma where to store the SQLite database file.

### Step 2: Database Schema

**File: `prisma/schema.prisma`**

Your schema defines one model:

**Calculation Model** - Stores anonymous tax calculations

- id (unique identifier)
- annualIncome, incomeSource, expenses
- estimatedTax, taxableIncome
- filingRequired, riskLevel
- timestamp

### Step 3: Generate Prisma Client

Every time you:

- Clone the repository
- Pull changes that modify the schema
- Switch branches

Run this command:

```bash
npm run db:generate
```

This generates the TypeScript types and client code in `node_modules/@prisma/client`.

### Step 4: Run Migrations

To create or update database tables:

**For development:**

```bash
npm run db:migrate
# or
npx prisma migrate dev --name your_migration_name
```

**For production:**

```bash
npx prisma migrate deploy
```

### Step 5: Using the Database in Your Code

The Prisma Client is already configured in `src/lib/prisma.ts`:

```typescript
import { prisma } from "@/lib/prisma";

// Example: Save a calculation (anonymous)
const calculation = await prisma.calculation.create({
  data: {
    annualIncome: 500000,
    incomeSource: "foreign",
    expenses: 50000,
    estimatedTax: 45000,
    taxableIncome: 450000,
    filingRequired: true,
    riskLevel: "low",
  },
});

// Example: Get all calculations (for analytics)
const calculations = await prisma.calculation.findMany({
  orderBy: { createdAt: "desc" },
  take: 10, // Last 10 calculations
});

// Example: Count total anonymous calculations
const totalCalculations = await prisma.calculation.count();
```

---

## API Routes Using Database

### `/api/calculations/save` - Save Anonymous Calculations

**File: `src/app/api/calculations/save/route.ts`**

Stores tax calculation results anonymously in the database for analytics purposes.

**Usage:**

```javascript
fetch("/api/calculations/save", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    annualIncome: 500000,
    incomeSource: "foreign",
    expenses: 50000,
    estimatedTax: 45000,
    taxableIncome: 450000,
    filingRequired: true,
    riskLevel: "low",
  }),
});
```

---

## Common Commands

| Command                    | Description                            |
| -------------------------- | -------------------------------------- |
| `npm run db:generate`      | Generate Prisma Client                 |
| `npm run db:migrate`       | Create and apply migrations (dev)      |
| `npm run db:studio`        | Open Prisma Studio (database GUI)      |
| `npx prisma migrate reset` | Reset database (⚠️ deletes all data)   |
| `npx prisma db push`       | Push schema changes without migrations |

---

## Viewing Your Database

### Option 1: Prisma Studio (Recommended)

```bash
npm run db:studio
```

Opens a web interface at `http://localhost:5555` where you can:

- View all tables and data
- Add, edit, delete records
- Run queries

### Option 2: SQLite Browser

Download and use [DB Browser for SQLite](https://sqlitebrowser.org/) to open `dev.db` file directly.

---

## Database Location

- **Development**: `d:\projects\tax-calculator\dev.db`
- **Production**: Configure `DATABASE_URL` in your hosting platform's environment variables

---

## Troubleshooting

### Error: "Module '@prisma/client' has no exported member 'PrismaClient'"

**Solution:**

```bash
npm run db:generate
```

### Error: "Can't reach database server"

**Solution:** Check that `DATABASE_URL` is set correctly in `.env.local`

### Error: "Table does not exist"

**Solution:**

```bash
npm run db:migrate
```

### Database is locked

**Solution:** Close any programs accessing the database file (like Prisma Studio or DB Browser)

---

## Production Deployment

### For Vercel/Netlify (Serverless):

1. Use a hosted database service:

   - **Turso** (LibSQL - recommended for SQLite)
   - **PlanetScale** (MySQL)
   - **Supabase** (PostgreSQL)

2. Update `DATABASE_URL` in production environment variables

3. Run migrations:

```bash
npx prisma migrate deploy
```

### For Traditional Hosting:

1. Upload your database file or create it on the server
2. Set `DATABASE_URL` environment variable
3. Run `npm run db:generate` on the server
4. Run `npx prisma migrate deploy`

---

## Data Model Reference

### Calculation (Anonymous)

```typescript
{
  id: string; // Auto-generated CUID
  annualIncome: number; // Total yearly income
  incomeSource: string; // "foreign" | "local"
  expenses: number; // Business expenses (default: 0)
  estimatedTax: number; // Calculated tax amount
  taxableIncome: number; // Income after deductions
  filingRequired: boolean; // Whether filing is required
  riskLevel: string; // "low" | "medium" | "high"
  createdAt: Date; // Auto-generated timestamp
}
```

---

## Next Steps

1. ✅ Database is already set up and running
2. ✅ API route is configured to save anonymous calculations
3. ✅ Prisma Client is generated
4. ✅ **Everything is FREE** - no signup required
5. 🔄 Test the calculator and view stored data: `npm run db:studio`
6. 🔄 All calculations are saved anonymously for analytics

---

## Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs)
- [Prisma Client API Reference](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference)
- [SQLite Documentation](https://www.sqlite.org/docs.html)
