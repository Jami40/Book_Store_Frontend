# 📚 Book Store Frontend

A modern, full-featured book store application built with React, Vite, and Tailwind CSS. Browse, search, manage, and purchase books with a beautiful and responsive user interface.

## ✨ Features

### 🏠 Core Features
- **Browse Books** - View all available books in a beautiful grid layout
- **Search Functionality** - Real-time search by book title or author
- **Book Details** - Detailed view of each book with all information
- **Shopping Cart** - Add books to cart with quantity management
- **Add New Books** - Admin functionality to add books to the store
- **Edit & Delete Books** - Manage existing books in the database

### 🎨 UI/UX Features
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Modern Gradient UI** - Beautiful amber/orange color scheme
- **Toast Notifications** - Real-time feedback for all actions
- **Loading States** - Smooth loading indicators
- **Empty States** - User-friendly messages when no data is available
- **Sticky Navbar** - Always accessible navigation
- **Card Hover Effects** - Smooth animations and transitions

### 🛒 Shopping Cart Features
- **Persistent Cart** - Cart data saved in localStorage
- **Quantity Management** - Increase/decrease item quantities
- **Cart Badge** - Real-time count display in navbar
- **Order Summary** - Subtotal, tax, and total calculations
- **Empty Cart State** - Helpful prompts when cart is empty

## 🚀 Technologies Used

- **React 19.2.0** - UI library
- **Vite 5.x** - Build tool and dev server
- **React Router DOM 7.9.6** - Client-side routing
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **React Hot Toast** - Toast notifications
- **LocalForage** - Enhanced localStorage
- **Context API** - State management for cart

## 📦 Installation

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/Jami40/Book_Store_Frontend.git
cd Book_Store_Frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure Backend URL**
The app connects to `http://localhost:3000` by default. If your backend runs on a different port, update the API URLs in:
- `src/Pages/Books/Books.jsx`
- `src/Pages/AddBook/AddBook.jsx`

4. **Start the development server**
```bash
npm run dev
```

5. **Open in browser**
Navigate to `http://localhost:5173` (or the port shown in terminal)

## 🏗️ Project Structure

```
Book_Store_Frontend/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, etc.
│   ├── context/           # React Context (CartContext)
│   ├── Layout/
│   │   └── MainLayout/    # Main layout wrapper
│   ├── Pages/
│   │   ├── AddBook/       # Add new book page
│   │   ├── Books/         # Browse books page
│   │   ├── Cart/          # Shopping cart page
│   │   └── HomePage/      # Home page with sections
│   ├── router/            # Route configuration
│   ├── Shared/
│   │   ├── Footer/        # Footer component
│   │   └── Navbar/        # Navigation bar
│   ├── App.jsx            # Root component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── .eslintrc.json         # ESLint configuration
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎯 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

## 🔗 API Integration

This frontend connects to a Node.js/Express backend with MongoDB. Required API endpoints:

### Books
- `GET /books` - Fetch all books
- `POST /books` - Create a new book
- `PUT /books/:id` - Update a book
- `DELETE /books/:id` - Delete a book

### Example Book Object
```json
{
  "title": "Book Title",
  "author": "Author Name",
  "category": "Fiction",
  "description": "Book description...",
  "price": 12.99,
  "coverImage": "https://example.com/image.jpg",
  "rating": 4.5,
  "publishedYear": 2024,
  "isbn": "978-0-123-45678-9"
}
```

## 🌟 Key Features Walkthrough

### 1. Browse Books (`/books`)
- Grid display of all books (3 per row)
- Search bar in navbar (only visible on books page)
- Book cards with:
  - Cover image with hover zoom effect
  - Title, author, category
  - Rating badge
  - Price
  - "Details" and "Cart" buttons

### 2. Book Details Modal
- Full book information
- Larger cover image
- Complete description
- ISBN and published year
- Add to Cart button
- Edit and Delete buttons (admin features)

### 3. Add Book (`/add-book`)
- Comprehensive form with validation
- Category dropdown
- Image URL with live preview
- Toast confirmation on success
- Auto-redirect to books page

### 4. Shopping Cart (`/cart`)
- List of all cart items
- Quantity controls (+/-)
- Individual item removal
- Clear cart option
- Order summary with:
  - Subtotal
  - Free shipping
  - 10% tax
  - Total amount
- Proceed to checkout
- Continue shopping link

### 5. Search Functionality
- Real-time filtering
- Searches both title and author
- Case-insensitive
- Shows result count
- Empty state for no results

## 🎨 Styling & Theme

### Color Scheme
- Primary: Amber/Orange gradient
- Success: Green
- Error: Red
- Backgrounds: Amber-to-yellow gradient
- Text: Gray scale

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔒 State Management

### Cart Context
The application uses React Context API for cart state management:
- Global cart state accessible from any component
- Persistent storage using localStorage
- Automatic synchronization across components

## 📝 Environment Variables

No environment variables are required for the frontend. The backend URL is hardcoded but can be configured if needed.

## 🚧 Future Enhancements

- [ ] User authentication and authorization
- [ ] User reviews and ratings
- [ ] Wishlist functionality
- [ ] Order history
- [ ] Payment integration
- [ ] Advanced filtering (by category, price range, rating)
- [ ] Book recommendations
- [ ] Dark mode support
- [ ] Multi-language support

## 🐛 Known Issues

None at the moment. Please report issues on GitHub.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Jami**
- GitHub: [@Jami40](https://github.com/Jami40)

## 🙏 Acknowledgments

- React team for the amazing library
- Tailwind CSS for the utility-first CSS framework
- Vite for the lightning-fast build tool
- React Hot Toast for beautiful notifications

---

**Happy Reading! 📚✨**
