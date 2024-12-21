import { Routes, Route } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Layout from './components/Layout';
import Home from './components/Home'
import Project from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('isDarkMode')) || window.matchMedia('(prefers-color-scheme: dark)').matches)

  const [isActive, setIsActive] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    emailAddress: '',
    message: ''
  })

  const [errors, setErrors] = useState({})

  const nameRef = useRef(null)
  const emailAddressRef = useRef(null)
  const messageRef = useRef(null)

  useEffect(() => {
    document.body.className = isDarkMode ? 'darkMode' : 'lightMode';

    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode)); 
  }, [isDarkMode]);

  const validateForm = () => {
    let isValid = true
    const newErrors = {}

    if (!formData.name) {
      newErrors.name = 'This field is required'
       nameRef.current.focus()
        isValid = false
    }

    if (!formData.emailAddress) {
      newErrors.email = 'This field is required'
      if (isValid) emailAddressRef.current.focus()
        isValid = false
    }

    if (!formData.message) {
      newErrors.message = 'This field is required'
      if (isValid) messageRef.current.focus()
        isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const showToast = (messageToast) => {
    alert(messageToast)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (validateForm()) {

      /* const encodedData = new URLSearchParams();
      for (const key in formData) {
        encodedData.append(key, formData[key]);
      }

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData.toString(),
      })
        .then(() => alert("Form successfully submitted!"))
        .catch((error) => alert("Error submitting form", error)) */

      showToast("Form submitted successfully!")
      setFormData({
        name: '',
        emailAddress: '',
        message: ''
      })
    }
  }

  const handleChange = (event) => {
    const {name, type, checked, value} = event.target
    setFormData(prevContact => {
      return (
        {...prevContact, [name]: type === "checkbox" ? checked : value}
      )
    })
  }

  const handleClick = () => {
    setIsDarkMode(prevMode => !prevMode);
  }

  const toggleMenu = () => {
    setIsActive(prevMenu => !prevMenu)
  }

  return (
    <Routes>
      <Route path='/' element={ 
          <Layout handleClick={handleClick} 
                  isDarkMode={isDarkMode}
                  toggleMenu={toggleMenu}
                  isActive={isActive}
          /> }>
        <Route index element={ <Home /> } />
        <Route path='project' element={<Project />} />
        <Route path='contact' element={
          <Contact 
            handleChange={handleChange}
            name={formData.name}
            emailAddress={formData.emailAddress}
            message={formData.message}
            handleSubmit={handleSubmit}
            errors={errors}
            nameRef={nameRef}
            emailAddressRef={emailAddressRef}
            messageRef={messageRef}
          />
          } />
      </Route>
    </Routes>
  );
}

export default App;
