# 📋 Task Checklist - To-Do List Web App

## 📊 Overall Progress

- **Total Tasks:** 50+
- **Completed:** 0
- **In Progress:** 0
- **Not Started:** 50+

---

## 🎯 Phase 1: Foundation Setup & Component Refactoring

**Timeline:** 1-2 วัน | **Priority:** 🔴 สูงสุด

### 1.1 Type Definitions & Interfaces

- [ ] สร้าง `types/task.ts`
  - [ ] สร้าง `TaskPriority` type
  - [ ] สร้าง `TaskStatus` type
  - [ ] สร้าง `Task` interface
  - [ ] สร้าง `TaskCategory` interface
  - [ ] สร้าง `TaskStats` interface

- [ ] สร้าง `types/user.ts`
  - [ ] สร้าง `User` interface

- [ ] สร้าง `types/index.ts` (export ทุก types)

### 1.2 Constants

- [ ] สร้าง `constants/colors.ts`
  - [ ] กำหนด `PRIORITY_COLORS`
  - [ ] กำหนด `STATUS_COLORS`
  - [ ] กำหนด `CATEGORY_COLORS`

- [ ] สร้าง `constants/index.ts` (export ทุก constants)

### 1.3 Utility Functions

- [ ] สร้าง `utils/taskUtils.ts`
  - [ ] สร้าง `calculateTaskStats()`
  - [ ] สร้าง `filterTasksByStatus()`
  - [ ] สร้าง `filterTasksByPriority()`
  - [ ] สร้าง `sortTasksByPriority()`
  - [ ] สร้าง `sortTasksByDate()`
  - [ ] สร้าง `searchTasks()`

- [ ] สร้าง `utils/dateUtils.ts`
  - [ ] สร้าง `formatDate()`
  - [ ] สร้าง `getRelativeTime()`
  - [ ] สร้าง `isOverdue()`
  - [ ] สร้าง `formatDueDate()`

- [ ] สร้าง `utils/index.ts` (export ทุก utils)

### 1.4 Common Components

- [ ] สร้าง `components/common/TaskCard/`
  - [ ] สร้าง `TaskCard.tsx`
  - [ ] สร้าง `TaskCard.module.css` (ถ้าต้องการ)
  - [ ] สร้าง `index.ts`
  - [ ] เพิ่ม props interface
  - [ ] เพิ่ม More Options Menu
  - [ ] เพิ่ม responsive design

- [ ] สร้าง `components/common/CircleChart/`
  - [ ] สร้าง `CircleChart.tsx`
  - [ ] แยกออกจาก Dashboard
  - [ ] เพิ่ม animation
  - [ ] เพิ่ม size variants (sm, md, lg)
  - [ ] สร้าง `index.ts`

- [ ] สร้าง `components/common/PriorityBadge/`
  - [ ] สร้าง `PriorityBadge.tsx`
  - [ ] เพิ่ม color coding
  - [ ] เพิ่ม size variants
  - [ ] สร้าง `index.ts`

- [ ] สร้าง `components/common/StatusBadge/`
  - [ ] สร้าง `StatusBadge.tsx`
  - [ ] เพิ่ม color coding
  - [ ] เพิ่ม size variants
  - [ ] สร้าง `index.ts`

### 1.5 Testing Phase 1

- [ ] ทดสอบ utility functions
- [ ] ทดสอบ common components
- [ ] ตรวจสอบ TypeScript types
- [ ] Commit Phase 1

---

## 📝 Phase 2: Core CRUD Features

**Timeline:** 2-3 วัน | **Priority:** 🔴 สูง

### 2.1 State Management

- [ ] สร้าง `contexts/TaskContext.tsx`
  - [ ] สร้าง `TaskContextType` interface
  - [ ] สร้าง `TaskProvider` component
  - [ ] เพิ่ม `addTask()` function
  - [ ] เพิ่ม `updateTask()` function
  - [ ] เพิ่ม `deleteTask()` function
  - [ ] เพิ่ม `getTaskById()` function
  - [ ] Auto-calculate `stats`
  - [ ] เพิ่ม localStorage persistence

- [ ] สร้าง `contexts/index.ts` (export contexts)

### 2.2 Task Form Modal

- [ ] สร้าง `components/features/TaskForm/`
  - [ ] สร้าง `TaskFormModal.tsx`
  - [ ] เพิ่ม Title input (required)
  - [ ] เพิ่ม Description textarea (required)
  - [ ] เพิ่ม Priority dropdown
  - [ ] เพิ่ม Status dropdown
  - [ ] เพิ่ม Due Date picker
  - [ ] เพิ่ม Category dropdown
  - [ ] เพิ่ม Image upload
  - [ ] เพิ่ม Tags input
  - [ ] เพิ่ม Form validation
  - [ ] เพิ่ม Error messages
  - [ ] เพิ่ม Submit/Cancel buttons
  - [ ] สร้าง `index.ts`

### 2.3 Task Actions & Menu

- [ ] อัพเดท `components/common/TaskCard/`
  - [ ] เพิ่ม More Options Menu (Dropdown)
  - [ ] เพิ่ม Edit action → เปิด TaskFormModal
  - [ ] เพิ่ม Delete action → แสดง Confirmation
  - [ ] เพิ่ม Change Status submenu
  - [ ] เพิ่ม Mark as Important
  - [ ] เพิ่ม Duplicate Task

- [ ] สร้าง `components/common/ConfirmDialog/`
  - [ ] สร้าง `ConfirmDialog.tsx`
  - [ ] เพิ่ม title, message props
  - [ ] เพิ่ม onConfirm, onCancel callbacks
  - [ ] สร้าง `index.ts`

### 2.4 Update Dashboard

- [ ] อัพเดท `features/dashboard/pages/Dashboard.tsx`
  - [ ] ลบ mock data
  - [ ] ใช้ `TaskContext` แทน
  - [ ] เชื่อมต่อ Add Task button
  - [ ] เพิ่ม TaskFormModal
  - [ ] Real-time update charts
  - [ ] แสดง Empty State (ถ้าไม่มีงาน)
  - [ ] เพิ่ม Loading State

### 2.5 Testing Phase 2

- [ ] ทดสอบ Create task
- [ ] ทดสอบ Read tasks
- [ ] ทดสอบ Update task
- [ ] ทดสอบ Delete task
- [ ] ทดสอบ localStorage persistence
- [ ] ทดสอบ Charts update
- [ ] Commit Phase 2

---

## 🔍 Phase 3: Advanced Features

**Timeline:** 2-3 วัน | **Priority:** 🟡 ปานกลาง

### 3.1 Search & Filter

- [ ] สร้าง `components/features/TaskFilters/`
  - [ ] สร้าง `TaskFilters.tsx`
  - [ ] เพิ่ม Search input
  - [ ] เพิ่ม Status filter (checkboxes)
  - [ ] เพิ่ม Priority filter (checkboxes)
  - [ ] เพิ่ม Category filter (dropdown)
  - [ ] เพิ่ม Date range picker
  - [ ] เพิ่ม Reset filters button
  - [ ] เพิ่ม Active filters display
  - [ ] สร้าง `index.ts`

- [ ] อัพเดท Dashboard
  - [ ] เพิ่ม TaskFilters component
  - [ ] เชื่อมต่อ filter logic
  - [ ] แสดง filtered results

### 3.2 Task Categories Management

- [ ] สร้าง `contexts/CategoryContext.tsx`
  - [ ] สร้าง CRUD functions
  - [ ] localStorage persistence

- [ ] สร้าง `features/task-categories/components/`
  - [ ] สร้าง `CategoryList.tsx`
  - [ ] สร้าง `CategoryCard.tsx`
  - [ ] สร้าง `CategoryForm.tsx`
  - [ ] สร้าง `ColorPicker.tsx`
  - [ ] สร้าง `IconPicker.tsx`

- [ ] อัพเดท `features/task-categories/pages/TaskCategoriesPage.tsx`
  - [ ] แสดง CategoryList
  - [ ] เพิ่ม Add Category button
  - [ ] เพิ่ม Edit/Delete actions
  - [ ] แสดงจำนวนงานในแต่ละ category

### 3.3 My Task Page

- [ ] อัพเดท `features/my-task/pages/MyTaskPage.tsx`
  - [ ] แสดงงานทั้งหมด
  - [ ] เพิ่ม View switcher (List/Grid)
  - [ ] เพิ่ม Group by options
  - [ ] เพิ่ม Sort options
  - [ ] เพิ่ม TaskFilters
  - [ ] เพิ่ม Pagination (ถ้าจำเป็น)

### 3.4 Vital Task Page

- [ ] อัพเดท `features/vital-task/pages/VitalTaskPage.tsx`
  - [ ] แสดงงาน Priority = High
  - [ ] แสดงงานใกล้ครบกำหนด
  - [ ] แสดงงานที่ mark as important
  - [ ] เพิ่ม sorting options
  - [ ] เพิ่ม quick actions

### 3.5 Testing Phase 3

- [ ] ทดสอบ Search functionality
- [ ] ทดสอบ Filter functionality
- [ ] ทดสอบ Category CRUD
- [ ] ทดสอบ My Task page
- [ ] ทดสอบ Vital Task page
- [ ] Commit Phase 3

---

## 🔗 Phase 4: Integration & State Management

**Timeline:** 1-2 วัน | **Priority:** 🟡 ปานกลาง

### 4.1 Custom Hooks

- [ ] สร้าง `hooks/useLocalStorage.ts`
  - [ ] Auto-save functionality
  - [ ] Auto-load functionality
  - [ ] Error handling

- [ ] สร้าง `hooks/useTasks.ts`
  - [ ] Wrapper around TaskContext
  - [ ] Additional helper functions

- [ ] สร้าง `hooks/useTaskFilters.ts`
  - [ ] Filter logic
  - [ ] Search logic
  - [ ] Sort logic

- [ ] สร้าง `hooks/useCategories.ts`
  - [ ] Wrapper around CategoryContext

- [ ] สร้าง `hooks/index.ts` (export hooks)

### 4.2 Notification System

- [ ] สร้าง `contexts/NotificationContext.tsx`
  - [ ] Success notification
  - [ ] Error notification
  - [ ] Info notification
  - [ ] Warning notification

- [ ] สร้าง `components/common/Notification/`
  - [ ] สร้าง `Notification.tsx`
  - [ ] Toast style
  - [ ] Auto-dismiss
  - [ ] Position options
  - [ ] สร้าง `index.ts`

- [ ] Integrate notifications
  - [ ] Task created
  - [ ] Task updated
  - [ ] Task deleted
  - [ ] Errors

### 4.3 Testing Phase 4

- [ ] ทดสอบ custom hooks
- [ ] ทดสอบ localStorage
- [ ] ทดสอบ notifications
- [ ] Commit Phase 4

---

## ✨ Phase 5: Polish & Optimization

**Timeline:** 2-3 วัน | **Priority:** 🟢 ต่ำ

### 5.1 Responsive Design

- [ ] อัพเดท `components/layout/Sidebar/`
  - [ ] Drawer on mobile
  - [ ] Collapse on tablet
  - [ ] Full sidebar on desktop

- [ ] อัพเดท `components/layout/TopNavbar/`
  - [ ] Hamburger menu on mobile
  - [ ] Responsive search bar
  - [ ] Responsive user menu

- [ ] อัพเดท Dashboard
  - [ ] Stack layout on mobile
  - [ ] 2-column on tablet
  - [ ] 2-column on desktop

- [ ] อัพเดท TaskCard
  - [ ] Responsive image size
  - [ ] Responsive text
  - [ ] Touch-friendly on mobile

- [ ] ทดสอบทุก breakpoint
  - [ ] Mobile (< 640px)
  - [ ] Tablet (640px - 1024px)
  - [ ] Desktop (> 1024px)

### 5.2 Animations & Transitions

- [ ] สร้าง `styles/animations.css`
  - [ ] Fade in/out
  - [ ] Slide in/out
  - [ ] Scale animations
  - [ ] Bounce animations

- [ ] เพิ่ม animations ใน components
  - [ ] Modal animations
  - [ ] Card hover effects
  - [ ] Button hover effects
  - [ ] List transitions

### 5.3 Empty States

- [ ] สร้าง `components/common/EmptyState/`
  - [ ] สร้าง `EmptyState.tsx`
  - [ ] เพิ่ม icon/illustration
  - [ ] เพิ่ม message
  - [ ] เพิ่ม action button
  - [ ] สร้าง `index.ts`

- [ ] เพิ่ม Empty States
  - [ ] ไม่มีงาน
  - [ ] ไม่มีผลการค้นหา
  - [ ] ไม่มี category
  - [ ] ไม่มี vital tasks

### 5.4 Loading States

- [ ] สร้าง `components/common/Loading/`
  - [ ] สร้าง `Loading.tsx`
  - [ ] Full page loading
  - [ ] Component loading
  - [ ] Button loading
  - [ ] สร้าง `index.ts`

- [ ] สร้าง `components/common/Skeleton/`
  - [ ] สร้าง `SkeletonCard.tsx`
  - [ ] สร้าง `SkeletonList.tsx`
  - [ ] สร้าง `index.ts`

- [ ] เพิ่ม Loading States
  - [ ] Dashboard loading
  - [ ] Task list loading
  - [ ] Form submitting

### 5.5 Settings Page

- [ ] อัพเดท `features/settings/pages/SettingPage.tsx`
  - [ ] User Profile section
    - [ ] Display name
    - [ ] Email
    - [ ] Avatar upload
  - [ ] Preferences section
    - [ ] Theme (Light/Dark)
    - [ ] Language
    - [ ] Notifications
  - [ ] Data Management section
    - [ ] Export data (JSON)
    - [ ] Import data
    - [ ] Clear all data
  - [ ] About section
    - [ ] Version
    - [ ] Credits

### 5.6 Help Page

- [ ] อัพเดท `features/help/pages/HelpPage.tsx`
  - [ ] FAQ section
  - [ ] User Guide
  - [ ] Keyboard Shortcuts
  - [ ] Contact Support
  - [ ] Video tutorials (optional)

### 5.7 Performance Optimization

- [ ] เพิ่ม `React.memo` ใน components
  - [ ] TaskCard
  - [ ] CircleChart
  - [ ] Badges

- [ ] เพิ่ม `useMemo` และ `useCallback`
  - [ ] Expensive calculations
  - [ ] Event handlers

- [ ] Lazy loading
  - [ ] Images
  - [ ] Routes (React.lazy)

- [ ] Code splitting
  - [ ] Split by routes
  - [ ] Split by features

### 5.8 Error Handling

- [ ] สร้าง `components/common/ErrorBoundary/`
  - [ ] สร้าง `ErrorBoundary.tsx`
  - [ ] Error UI
  - [ ] Reset button

- [ ] เพิ่ม Error Boundary
  - [ ] Wrap App
  - [ ] Wrap features

### 5.9 Accessibility (A11y)

- [ ] เพิ่ม ARIA labels
- [ ] Keyboard navigation
- [ ] Focus management
- [ ] Color contrast check
- [ ] Screen reader testing

### 5.10 Testing Phase 5

- [ ] ทดสอบ responsive design
- [ ] ทดสอบ animations
- [ ] ทดสอบ empty states
- [ ] ทดสอบ loading states
- [ ] ทดสอบ settings
- [ ] ทดสอบ help page
- [ ] ทดสอบ performance
- [ ] ทดสอบ error handling
- [ ] ทดสอบ accessibility
- [ ] Commit Phase 5

---

## 🎯 Final Testing & Deployment

- [ ] Full regression testing
- [ ] Cross-browser testing
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge

- [ ] Performance audit
  - [ ] Lighthouse score
  - [ ] Bundle size check

- [ ] Code review
  - [ ] Clean up console.logs
  - [ ] Remove unused code
  - [ ] Fix linting errors

- [ ] Documentation
  - [ ] Update README.md
  - [ ] Add code comments
  - [ ] Create user guide

- [ ] Build for production
  - [ ] `npm run build`
  - [ ] Test production build

- [ ] Deploy
  - [ ] Choose hosting (Vercel/Netlify/etc.)
  - [ ] Deploy
  - [ ] Test live site

---

## 📊 Progress Summary

### Phase 1: Foundation Setup

- **Progress:** 0/30 tasks
- **Status:** ⏸️ Not Started

### Phase 2: Core CRUD Features

- **Progress:** 0/25 tasks
- **Status:** ⏸️ Not Started

### Phase 3: Advanced Features

- **Progress:** 0/20 tasks
- **Status:** ⏸️ Not Started

### Phase 4: Integration

- **Progress:** 0/15 tasks
- **Status:** ⏸️ Not Started

### Phase 5: Polish & Optimization

- **Progress:** 0/40 tasks
- **Status:** ⏸️ Not Started

---

## 📝 Notes

> **อัพเดท checklist นี้เมื่อ:**
>
> - เริ่มทำงาน: เปลี่ยนจาก `[ ]` เป็น `[/]`
> - เสร็จแล้ว: เปลี่ยนจาก `[/]` เป็น `[x]`

> **Commit Guidelines:**
>
> - แต่ละ Phase ควร commit แยก
> - ใช้กฎการตั้งชื่อ commit ตามที่กำหนด
> - เขียน commit message ให้ชัดเจน
