# AI Agent Instructions for PureCheckup Healthcare Client

## Project Overview
This is a React + TypeScript + Vite healthcare application focusing on medical specialties and treatments. The project uses modern React practices and a comprehensive UI component system.

## Architecture & Structure

### Core Technologies
- React 18 with TypeScript
- Vite for build tooling
- React Router for navigation
- Radix UI + Tailwind CSS for UI components
- React Hook Form + Zod for form handling

### Key Directories
- `/src/components/` - Reusable UI components organized by feature
- `/src/pages/` - Route-specific pages organized by medical specialty
- `/src/assets/` - Static assets organized by specialty sections
- `/src/validation/` - Form validation schemas
- `/src/config/` - Application configuration including SEO

### Component Patterns
1. **Specialty Pages**: Located in `/src/pages/{specialty}/`, each following a consistent structure:
   - Main specialty page (e.g., `Practology.tsx`)
   - Condition-specific pages (e.g., `PilesTreatment.tsx`)
   - City-wise treatment pages

2. **Component Organization**:
   - Use named exports for components
   - Place shared components in `/src/components/common/`
   - Specialty-specific components go in their respective directories

## Development Workflow

### Setup & Running
```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build
```

### Code Conventions
1. **Routing**:
   - Routes are centrally defined in `src/routes.ts`
   - Use lazy loading for route components
   - Route components should be organized by medical specialty

2. **Forms**:
   - Use React Hook Form with Zod validation
   - Validation schemas live in `/src/validation/`
   - See `ConditionTreatmentFormValidation.ts` for reference

3. **UI Components**:
   - Built on Radix UI primitives
   - Follow component structure in `/src/components/ui/`
   - Use Tailwind CSS for styling

## Integration Points
1. **SEO Configuration**:
   - SEO settings defined in `/src/config/seo.config.ts`
   - Use `<SEO>` component for page-specific metadata

2. **Image Assets**:
   - Store in `/src/assets/{specialty}/`
   - Import through `/src/assets/index.ts` barrel file

## Common Tasks
- Adding new treatment page: Copy structure from existing pages in respective specialty directory
- Creating new form: Use `AppointmentForm.tsx` or `ConditionTreatmentForm.tsx` as reference
- Adding new specialty: Create directory in `/src/pages/` and update `routes.ts`

## Debugging
- Check Vite HMR logs in dev console
- Form validation errors are handled through React Hook Form's error object
- SEO issues can be previewed in development using React Helmet