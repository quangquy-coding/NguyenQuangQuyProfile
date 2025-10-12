# Dark Mode Implementation Guide

## Tổng quan
Dự án đã được cải thiện với chức năng dark mode hoàn chỉnh, bao gồm:

### 🎨 Tính năng chính
- **ThemeContext**: Quản lý trạng thái dark mode toàn cục
- **System Preference Detection**: Tự động phát hiện và theo dõi system preference
- **Smooth Transitions**: Chuyển đổi mượt mà giữa light/dark mode
- **Persistent Storage**: Lưu trữ preference trong localStorage
- **Loading States**: Tránh flash of unstyled content

### 🛠️ Components

#### ThemeContext (`src/contexts/ThemeContext.jsx`)
- Quản lý trạng thái dark mode
- Tự động phát hiện system preference
- Lưu trữ và khôi phục theme từ localStorage
- Cung cấp các methods: `toggleTheme`, `setTheme`, `resetToSystem`

#### ThemeToggle (`src/components/ThemeToggle.jsx`)
- Component toggle theme với animations
- Hỗ trợ custom size và label
- Animations: spin cho sun icon, pulse cho moon icon

#### ThemeIndicator (`src/components/ThemeIndicator.jsx`)
- Hiển thị trạng thái theme hiện tại
- Hiển thị system preference status

#### ThemeStatus (`src/components/ThemeStatus.jsx`)
- Component chi tiết về trạng thái theme
- Hiển thị current theme, system preference, saved preference

#### DarkModeTest (`src/components/DarkModeTest.jsx`)
- Component test cho development
- Chỉ hiển thị trong development mode
- Cung cấp controls để test các tính năng

### 🎯 Cách sử dụng

#### 1. Sử dụng ThemeContext
```jsx
import { useTheme } from "./contexts/ThemeContext";

function MyComponent() {
  const { darkMode, toggleTheme, setTheme, resetToSystem } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      {darkMode ? "Switch to Light" : "Switch to Dark"}
    </button>
  );
}
```

#### 2. Sử dụng ThemeToggle
```jsx
import { ThemeToggle } from "./components";

function Navbar() {
  return (
    <nav>
      <ThemeToggle size={20} showLabel={true} />
    </nav>
  );
}
```

#### 3. Sử dụng ThemeStatus
```jsx
import { ThemeStatus } from "./components";

function Settings() {
  return (
    <div>
      <ThemeStatus />
    </div>
  );
}
```

### 🎨 CSS Classes

#### Custom Animations
- `.animate-spin-slow`: Xoay chậm (3s)
- `.animate-fade-in`: Fade in animation
- `.animate-slide-in`: Slide in animation
- `.theme-transition`: Smooth theme transitions

#### Dark Mode Classes
- `.dark`: Dark mode root class
- Tất cả components đã có dark mode variants

### 🔧 Configuration

#### Theme Preferences
- **System Preference**: Tự động theo system setting
- **Manual Override**: User có thể override system preference
- **Reset to System**: Có thể reset về system preference

#### Storage
- `localStorage.getItem("theme")`: Lấy saved theme
- `localStorage.setItem("theme", "dark/light")`: Lưu theme
- `localStorage.removeItem("theme")`: Reset về system

### 🚀 Development

#### Testing
- `DarkModeTest` component chỉ hiển thị trong development
- Cung cấp controls để test tất cả tính năng
- Hiển thị trạng thái chi tiết của theme system

#### Debugging
- Check browser dev tools > Application > Local Storage
- Monitor `prefers-color-scheme` media query changes
- Use ThemeStatus component để debug

### 📱 Responsive Design
- Tất cả components đều responsive
- Mobile-friendly theme toggle
- Smooth transitions trên mọi devices

### 🎯 Best Practices
1. **Always use ThemeContext** thay vì local state
2. **Test trên cả light và dark mode**
3. **Sử dụng semantic color classes** (text-gray-900 dark:text-white)
4. **Avoid hardcoded colors** trong components
5. **Test system preference changes**

### 🔄 Migration từ code cũ
- Thay thế local `darkMode` state bằng `useTheme()`
- Remove manual theme logic từ components
- Sử dụng ThemeToggle thay vì custom toggle buttons
- Update CSS classes để support dark mode

### 🐛 Troubleshooting

#### Common Issues
1. **Flash of unstyled content**: Sử dụng loading state
2. **Theme not persisting**: Check localStorage permissions
3. **System preference not updating**: Check media query listener
4. **Animations not working**: Check CSS classes và imports

#### Debug Steps
1. Check ThemeContext state
2. Verify localStorage values
3. Test system preference changes
4. Check CSS transitions
5. Use DarkModeTest component

### 📈 Performance
- Minimal re-renders với optimized context
- Smooth transitions với CSS transforms
- Efficient localStorage usage
- Lazy loading cho theme components

### 🎨 Customization
- Modify colors trong Tailwind config
- Add custom animations trong CSS
- Extend ThemeContext với additional features
- Create custom theme variants

---

**Lưu ý**: Chức năng dark mode đã được implement hoàn chỉnh và ready for production. Tất cả components đều support dark mode với smooth transitions và proper accessibility.
