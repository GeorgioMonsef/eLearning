import React from 'react';
import './About.css'; // Import the CSS file for styles

const About = () => {
    return (
        <div className="about-container">
            <h1 className="fade-in">About Us</h1>
            <p className="fade-in delay-1">Welcome to StudyMate, your trusted partner in academic success. Established with a vision to empower learners of all ages and backgrounds, StudyMate is dedicated to providing comprehensive educational support and resources. At StudyMate, we understand the challenges faced by students in today's dynamic learning environment. Our mission is to bridge the gap between potential and achievement through personalized learning solutions. Whether you are a student aiming to excel in exams, a professional seeking to enhance skills, or an institution committed to educational excellence, StudyMate offers tailored services to meet your unique needs. Our commitment to quality is reflected in our team of experienced educators and subject matter experts who are passionate about education. We leverage cutting-edge technology and proven teaching methodologies to deliver effective learning experiences that foster academic growth and success..</p>
            <p className="fade-in delay-2">Our platform offers a wide range of subjects and personalized assistance to help you achieve your academic goals.</p>
            <div className="team-section fade-in delay-3">
                <h2>Our Team</h2>
                <ul>
                    <li>Jane Doe - Founder & CEO</li>
                    <li>John Smith - Lead Developer</li>
                    <li>Emily Johnson - Education Specialist</li>
                    <li>Michael Brown - Customer Support</li>
                </ul>
            </div>
            <div className="mission-section fade-in delay-4">
                <h2>Our Mission</h2>
                <p>We aim to empower students by providing accessible, high-quality educational resources and support.</p>
            </div>
        </div>
    );
};

export default About;