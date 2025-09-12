import React, { useState } from 'react';
import image1Bed2 from '../assets/image1Bed2.jpeg';
import image2Bed2 from '../assets/image2Bed2.jpeg';

const Profile = () => {
    const [activeSection, setActiveSection] = useState('about');
    const [isEditing, setIsEditing] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [userProfile, setUserProfile] = useState({
        name: 'John Traveler',
        email: 'john.traveler@email.com',
        phone: '+91 98765 43210',
        location: 'Shillong, Meghalaya',
        bio: 'Adventure enthusiast exploring the mystical landscapes of Northeast India 🏔️',
        aboutMe: 'I\'m a nature lover and adventure seeker who believes in sustainable travel. When I\'m not exploring hidden waterfalls in Meghalaya, you can find me planning my next camping trip or sharing travel stories over a cup of local tea.',
        joinDate: 'September 2023',
        bookingsCount: 12,
        reviewsCount: 8,
        languages: ['English', 'Hindi', 'Bengali'],
        occupation: 'Software Developer',
        userType: 'Guest'
    });

    const [editedProfile, setEditedProfile] = useState(userProfile);

    const pastTrips = [
        {
            id: 1,
            destination: 'Dawki River',
            location: 'Dawki, Meghalaya',
            date: 'August 2024',
            type: 'Adventure',
            image: image1Bed2,
            rating: 4.8,
            description: 'Crystal clear waters perfect for camping and kayaking'
        },
        {
            id: 2,
            destination: 'Living Root Bridge',
            location: 'Cherrapunji, Meghalaya',
            date: 'July 2024',
            type: 'Nature',
            image: image2Bed2,
            rating: 4.9,
            description: 'Incredible trek through dense forests to see nature\'s engineering'
        }
    ];

    // Get first letter of first name for avatar
    const getInitials = (name) => {
        return name.charAt(0).toUpperCase();
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProfile(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSaveProfile = () => {
        setUserProfile(editedProfile);
        setIsEditing(false);
        console.log('Profile updated:', editedProfile);
    };

    const handleCancelEdit = () => {
        setEditedProfile(userProfile);
        setIsEditing(false);
    };

    const handleEditClick = () => {
        setEditedProfile(userProfile);
        setIsEditing(true);
    };

    const handleSectionChange = (section) => {
        setActiveSection(section);
        setIsMobileMenuOpen(false); // Close mobile menu when section changes
    };

    // Mobile tabs component (bottom navigation style)
    const renderMobileTabs = () => (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-20">
            <div className="flex">
                <button
                    onClick={() => setActiveSection('about')}
                    className={`flex-1 flex flex-col items-center py-3 px-2 transition-colors ${activeSection === 'about'
                            ? 'text-gray-900 bg-gray-50'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                >
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white font-medium text-xs mb-1 ${activeSection === 'about' ? 'bg-gray-900' : 'bg-gray-400'
                        }`}>
                        {getInitials(userProfile.name)}
                    </div>
                    <span className="text-xs font-medium">About me</span>
                </button>

                <button
                    onClick={() => setActiveSection('trips')}
                    className={`flex-1 flex flex-col items-center py-3 px-2 transition-colors ${activeSection === 'trips'
                            ? 'text-gray-900 bg-gray-50'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                >
                    <div className="w-6 h-6 bg-orange-500 rounded-lg flex items-center justify-center mb-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                        </svg>
                    </div>
                    <span className="text-xs font-medium">Past trips</span>
                </button>

                <button
                    onClick={() => setActiveSection('connections')}
                    className={`flex-1 flex flex-col items-center py-3 px-2 transition-colors ${activeSection === 'connections'
                            ? 'text-gray-900 bg-gray-50'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                >
                    <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center mb-1">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16,4C18.2,4 20,5.8 20,8C20,10.2 18.2,12 16,12C13.8,12 12,10.2 12,8C12,5.8 13.8,4 16,4M16,5.9C14.9,5.9 14,6.8 14,7.9C14,9 14.9,9.9 16,9.9C17.1,9.9 18,9 18,7.9C18,6.8 17.1,5.9 16,5.9M20,17.9C20,16.4 16.7,15.9 15,15.9C14.5,15.9 14.1,15.9 13.7,16C14.5,16.6 15,17.6 15,18.7V22H22V20C22,18.9 21.1,18 20,18.9V17.9M8,6A2,2 0 0,1 10,8A2,2 0 0,1 8,10A2,2 0 0,1 6,8A2,2 0 0,1 8,6M8,7C7.4,7 7,7.4 7,8C7,8.6 7.4,9 8,9C8.6,9 9,8.6 9,8C9,7.4 8.6,7 8,7M8,13.75C10.07,13.75 12.7,14.76 12.95,15.95C12.96,16.02 12.97,16.1 12.97,16.17V18.22H3V16.5C3,15.47 8.43,13.75 8,13.75Z" />
                        </svg>
                    </div>
                    <span className="text-xs font-medium">Connections</span>
                </button>
            </div>
        </div>
    );

    const renderDesktopSidebar = () => (
        <div className="hidden lg:block w-80 bg-white border-r border-gray-200 min-h-screen">
            <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">Profile</h2>

                {/* Desktop Navigation Menu */}
                <div className="space-y-2">
                    <button
                        onClick={() => setActiveSection('about')}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${activeSection === 'about'
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-medium text-sm ${activeSection === 'about' ? 'bg-gray-900' : 'bg-gray-400'
                            }`}>
                            {getInitials(userProfile.name)}
                        </div>
                        <span className="font-medium">About me</span>
                    </button>

                    <button
                        onClick={() => setActiveSection('trips')}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${activeSection === 'trips'
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                            </svg>
                        </div>
                        <span className="font-medium">Past trips</span>
                    </button>

                    <button
                        onClick={() => setActiveSection('connections')}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${activeSection === 'connections'
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                    >
                        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16,4C18.2,4 20,5.8 20,8C20,10.2 18.2,12 16,12C13.8,12 12,10.2 12,8C12,5.8 13.8,4 16,4M16,5.9C14.9,5.9 14,6.8 14,7.9C14,9 14.9,9.9 16,9.9C17.1,9.9 18,9 18,7.9C18,6.8 17.1,5.9 16,5.9M20,17.9C20,16.4 16.7,15.9 15,15.9C14.5,15.9 14.1,15.9 13.7,16C14.5,16.6 15,17.6 15,18.7V22H22V20C22,18.9 21.1,18 20,18.9V17.9M8,6A2,2 0 0,1 10,8A2,2 0 0,1 8,10A2,2 0 0,1 6,8A2,2 0 0,1 8,6M8,7C7.4,7 7,7.4 7,8C7,8.6 7.4,9 8,9C8.6,9 9,8.6 9,8C9,7.4 8.6,7 8,7M8,13.75C10.07,13.75 12.7,14.76 12.95,15.95C12.96,16.02 12.97,16.1 12.97,16.17V18.22H3V16.5C3,15.47 8.43,13.75 8,13.75Z" />
                            </svg>
                        </div>
                        <span className="font-medium">Connections</span>
                    </button>
                </div>
            </div>
        </div>
    );

    const renderAboutMe = () => (
        <div className="space-y-6 lg:space-y-8 pb-20 lg:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">About me</h1>
                <button
                    onClick={handleEditClick}
                    className="text-sm font-medium text-gray-900 underline hover:no-underline self-start sm:self-auto"
                >
                    Edit
                </button>
            </div>

            {/* Profile Card */}
            <div className="text-center py-6 lg:py-8">
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-900 rounded-full flex items-center justify-center text-white text-2xl lg:text-4xl font-medium mb-4 lg:mb-6 mx-auto">
                    {getInitials(userProfile.name)}
                </div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">{userProfile.name}</h2>
                <p className="text-gray-500">{userProfile.userType}</p>
            </div>

            {/* About Section */}
            <div className="space-y-6">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900">About {userProfile.name.split(' ')}</h3>
                <p className="text-gray-700 leading-relaxed text-sm lg:text-base">{userProfile.aboutMe}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                        <h4 className="font-medium text-gray-900 mb-2 text-sm lg:text-base">Occupation</h4>
                        <p className="text-gray-600 text-sm lg:text-base">{userProfile.occupation}</p>
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-900 mb-2 text-sm lg:text-base">Languages</h4>
                        <p className="text-gray-600 text-sm lg:text-base">{userProfile.languages.join(', ')}</p>
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-900 mb-2 text-sm lg:text-base">Lives in</h4>
                        <p className="text-gray-600 text-sm lg:text-base">{userProfile.location}</p>
                    </div>
                    <div>
                        <h4 className="font-medium text-gray-900 mb-2 text-sm lg:text-base">Joined</h4>
                        <p className="text-gray-600 text-sm lg:text-base">{userProfile.joinDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderPastTrips = () => (
        <div className="space-y-6 lg:space-y-8 pb-20 lg:pb-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">Past trips</h1>
                <button className="text-sm font-medium text-gray-900 underline hover:no-underline self-start sm:self-auto">
                    View all
                </button>
            </div>

            <div className="space-y-4 lg:space-y-6">
                {pastTrips.map(trip => (
                    <div key={trip.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <div className="flex flex-col sm:flex-row">
                            <img
                                src={trip.image}
                                alt={trip.destination}
                                className="w-full sm:w-32 h-48 sm:h-32 object-cover flex-shrink-0"
                            />
                            <div className="flex-1 p-4 lg:p-6">
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-gray-900 text-base lg:text-lg mb-1 lg:mb-2">{trip.destination}</h3>
                                        <p className="text-gray-600 mb-1 lg:mb-2 text-sm lg:text-base">{trip.location}</p>
                                        <p className="text-sm text-gray-500 mb-2 lg:mb-3">{trip.date}</p>
                                        <p className="text-gray-700 text-sm lg:text-base mb-3">{trip.description}</p>
                                        <div className="flex items-center space-x-2">
                                            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                                                {trip.type}
                                            </span>
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                                                </svg>
                                                <span className="text-sm text-gray-600">{trip.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-600 self-start">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {pastTrips.length === 0 && (
                <div className="text-center py-8 lg:py-12">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                        </svg>
                    </div>
                    <h3 className="text-base lg:text-lg font-medium text-gray-900 mb-2">No trips yet</h3>
                    <p className="text-gray-600 text-sm lg:text-base">Time to dust off your bags and start planning your next adventure</p>
                </div>
            )}
        </div>
    );

    const renderConnections = () => (
        <div className="space-y-6 lg:space-y-8 pb-20 lg:pb-0">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">Connections</h1>
            </div>

            <div className="text-center py-8 lg:py-12">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 lg:w-8 lg:h-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16,4C18.2,4 20,5.8 20,8C20,10.2 18.2,12 16,12C13.8,12 12,10.2 12,8C12,5.8 13.8,4 16,4M16,5.9C14.9,5.9 14,6.8 14,7.9C14,9 14.9,9.9 16,9.9C17.1,9.9 18,9 18,7.9C18,6.8 17.1,5.9 16,5.9M20,17.9C20,16.4 16.7,15.9 15,15.9C14.5,15.9 14.1,15.9 13.7,16C14.5,16.6 15,17.6 15,18.7V22H22V20C22,18.9 21.1,18 20,18.9V17.9M8,6A2,2 0 0,1 10,8A2,2 0 0,1 8,10A2,2 0 0,1 6,8A2,2 0 0,1 8,6M8,7C7.4,7 7,7.4 7,8C7,8.6 7.4,9 8,9C8.6,9 9,8.6 9,8C9,7.4 8.6,7 8,7M8,13.75C10.07,13.75 12.7,14.76 12.95,15.95C12.96,16.02 12.97,16.1 12.97,16.17V18.22H3V16.5C3,15.47 8.43,13.75 8,13.75Z" />
                    </svg>
                </div>
                <h3 className="text-base lg:text-lg font-medium text-gray-900 mb-2">No connections yet</h3>
                <p className="text-gray-600 text-sm lg:text-base">Connect with other travelers and hosts in the community</p>
            </div>
        </div>
    );

    const renderEditModal = () => (
        isEditing && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                    {/* Modal Header */}
                    <div className="flex items-center justify-between px-4 lg:px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">Edit profile</h3>
                        <button
                            onClick={handleCancelEdit}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                            </svg>
                        </button>
                    </div>

                    {/* Modal Body */}
                    <div className="px-4 lg:px-6 py-6">
                        <div className="space-y-6">
                            {/* Profile Image */}
                            <div className="text-center">
                                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gray-900 rounded-full flex items-center justify-center text-white text-xl lg:text-2xl font-medium mb-4 mx-auto">
                                    {getInitials(editedProfile.name)}
                                </div>
                                <button className="text-sm text-blue-600 hover:text-blue-700">
                                    Change photo
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={editedProfile.name}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 text-sm lg:text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={editedProfile.location}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 text-sm lg:text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Occupation</label>
                                    <input
                                        type="text"
                                        name="occupation"
                                        value={editedProfile.occupation}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 text-sm lg:text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={editedProfile.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 text-sm lg:text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={editedProfile.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 text-sm lg:text-base"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Languages</label>
                                    <input
                                        type="text"
                                        name="languages"
                                        value={editedProfile.languages.join(', ')}
                                        onChange={(e) => setEditedProfile(prev => ({
                                            ...prev,
                                            languages: e.target.value.split(', ').map(lang => lang.trim())
                                        }))}
                                        className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 text-sm lg:text-base"
                                        placeholder="English, Hindi, Bengali"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">About Me</label>
                                <textarea
                                    name="aboutMe"
                                    value={editedProfile.aboutMe}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 resize-none text-sm lg:text-base"
                                />
                                <p className="text-sm text-gray-500 mt-1">
                                    Tell other travelers about yourself and what you love about adventure.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="flex flex-col sm:flex-row gap-3 px-4 lg:px-6 py-4 border-t border-gray-200">
                        <button
                            onClick={handleCancelEdit}
                            className="flex-1 px-4 py-3 text-gray-700 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm lg:text-base"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSaveProfile}
                            className="flex-1 px-4 py-3 text-white bg-gray-900 border border-gray-900 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm lg:text-base"
                        >
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        )
    );

    const renderContent = () => {
        switch (activeSection) {
            case 'about':
                return renderAboutMe();
            case 'trips':
                return renderPastTrips();
            case 'connections':
                return renderConnections();
            default:
                return renderAboutMe();
        }
    };

    return (
        <div className="min-h-screen bg-white">
            <div className="flex">
                {renderDesktopSidebar()}
                <div className="flex-1 p-4 lg:p-8 max-w-none lg:max-w-4xl">
                    {renderContent()}
                </div>
            </div>
            {renderMobileTabs()}
            {renderEditModal()}
        </div>
    );
};

export default Profile;
