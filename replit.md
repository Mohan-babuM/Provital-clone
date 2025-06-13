# Lifestyle Medicine Platform

## Overview

This is a full-stack web application for a lifestyle medicine platform that connects patients with healthcare providers specializing in lifestyle medicine. The application features a React-based frontend with shadcn/ui components, an Express.js backend, and uses PostgreSQL with Drizzle ORM for data management.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: Hot reloading with tsx and Vite middleware integration

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Management**: Type-safe schema definitions with Zod validation
- **Migrations**: Drizzle Kit for database migrations and schema management

## Key Components

### Frontend Components
- **Desktop Page**: Main landing page with appointment booking functionality
- **Appointment Section**: Hero section with provider search and booking interface
- **How It Works Section**: Information about the platform's process
- **Six Pillars Section**: Interactive content about lifestyle medicine pillars
- **Lifestyle Overview**: Educational content about nutrition, physical activity, and sleep

### Backend Services
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **User Management**: Basic user CRUD operations with username/password authentication
- **API Routes**: RESTful API structure (currently minimal implementation)

### UI Design System
- **Color Scheme**: Professional medical theme with neutral base colors
- **Typography**: Inter font family for modern, readable interface
- **Components**: Comprehensive set of accessible UI components from shadcn/ui
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express.js handles requests and delegates to storage layer
3. **Data Storage**: Drizzle ORM manages database operations with type safety
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: Client-side caching and synchronization via React Query

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **wouter**: Lightweight routing library

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type safety across the stack
- **tailwindcss**: Utility-first CSS framework
- **drizzle-kit**: Database migration and management

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with ES modules
- **Database**: PostgreSQL 16 module in Replit
- **Development Server**: Vite dev server with HMR
- **API Integration**: Express middleware integration with Vite

### Production Deployment
- **Build Process**: Vite builds client assets, esbuild bundles server
- **Deployment Target**: Autoscale deployment on Replit
- **Static Assets**: Served from dist/public directory
- **Environment**: Production environment variables for database connection

### Database Management
- **Schema Updates**: `npm run db:push` for schema synchronization
- **Environment Configuration**: DATABASE_URL environment variable required
- **Migration Strategy**: Drizzle Kit handles schema migrations

## Changelog

```
Changelog:
- June 13, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```