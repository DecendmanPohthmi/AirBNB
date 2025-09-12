import React, { useState, useEffect } from 'react';
import image5 from '../assets/image5.jpeg';
import image9 from '../assets/image9.jpeg';
import image10 from '../assets/image10.jpeg';
import image11 from '../assets/image11.jpeg';
import image12 from '../assets/image12.jpeg';
import image14 from '../assets/image14.jpeg';
import image17 from '../assets/image17.jpeg';
import image1Bed2 from '../assets/image1Bed2.jpeg';
import image2Bed2 from '../assets/image2Bed2.jpeg';

const Profile = () => {
    const [userProfile, setUserProfile] = useState({
        name: 'John Traveler',
        email: 'john.traveler@email.com',
        phone: '+91 98765 43210',
        location: 'Shillong, Meghalaya',
        bio: 'Adventure enthusiast exploring the mystical landscapes of Northeast India 🏔️',
        profileImage: image5,
        coverImage: image17,
        joinDate: 'September 2023',
        bookingsCount: 12,
        reviewsCount: 8,
        savedSpots: 15
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editedProfile, setEditedProfile] = useState(userProfile);
    const [activeTab, setActiveTab] = useState('overview');

    const recentBookings = [
        {
            id: 1,
            spotName: 'Riverside Camping with Bonfire',
            location: 'Dawki',
            date: 'Aug 15-16, 2024',
            status: 'Completed',
            rating: 4.8,
            image: image1Bed2
        },
        {
            id: 2,
            spotName: 'Riverside Camping & Kayaking',
            location: 'Dawki',
            date: 'Jul 20-21, 2024',
            status: 'Completed',
            rating: 4.7,
            image: image2Bed2
        }
    ];

    const savedSpots = [
        {
            id: 1,
            name: 'Living Root Bridge Camp',
            location: 'Cherrapunji',
            price: '₹2500',
            rating: 4.9,
            image: image9
        },
        {
            id: 2,
            name: 'Mawlynnong Village Stay',
            location: 'Mawlynnong',
            price: '₹1800',
            rating: 4.8,
            image: image10
        },
        {
            id: 3,
            name: 'Double Decker Root Bridge Trek',
            location: 'Nongriat',
            price: '₹3200',
            rating: 4.9,
            image: image11
        },
        {
            id: 4,
            name: 'Elephant Falls Adventure',
            location: 'Shillong',
            price: '₹1200',
            rating: 4.6,
            image: image12
        }
    ];

    useEffect(() => {
        console.log('Profile component mounted');
    }, []);

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

    const handleImageUpload = (type) => {
        console.log(`Upload ${type} image`);
    };

    const renderProfileHeader = () => (
        <div className="relative">
            {/* Cover Image - Responsive heights */}
            <div className="relative h-48 sm:h-64 lg:h-80 xl:h-96 overflow-hidden">
                <img
                    src={userProfile.coverImage}
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <button
                    className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 p-2 rounded-full transition-all duration-200 shadow-lg"
                    onClick={() => handleImageUpload('cover')}
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" />
                    </svg>
                </button>
            </div>

            {/* Profile Content Container - Full width on desktop */}
            <div className="relative px-4 sm:px-6 lg:px-8 xl:px-12 pb-6 lg:pb-8">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">

                    {/* Left Side - Profile Image and Basic Info */}
                    <div className="flex flex-col sm:flex-row sm:items-end lg:items-end space-y-4 sm:space-y-0 sm:space-x-6">
                        {/* Profile Image */}
                        <div className="relative -mt-12 sm:-mt-16 lg:-mt-20">
                            <div className="relative inline-block">
                                <img
                                    src={userProfile.profileImage}
                                    alt="Profile"
                                    className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border-4 border-white shadow-lg object-cover"
                                />
                                <button
                                    className="absolute bottom-1 right-1 lg:bottom-2 lg:right-2 bg-blue-500 hover:bg-blue-600 text-white p-1.5 lg:p-2 rounded-full transition-colors duration-200 shadow-lg"
                                    onClick={() => handleImageUpload('profile')}
                                >
                                    <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Profile Details */}
                        <div className="flex-1 min-w-0">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{userProfile.name}</h1>
                            <p className="text-gray-600 mb-2 flex items-center text-sm lg:text-base">
                                <svg className="w-4 h-4 lg:w-5 lg:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                                </svg>
                                {userProfile.location}
                            </p>
                            <p className="text-gray-700 mb-4 leading-relaxed text-sm lg:text-base max-w-2xl">{userProfile.bio}</p>
                        </div>
                    </div>

                    {/* Right Side - Stats and Actions */}
                    <div className="flex flex-col sm:flex-row lg:flex-col space-y-4 sm:space-y-0 sm:space-x-8 lg:space-x-0 lg:space-y-4">
                        {/* Profile Stats */}
                        <div className="flex space-x-6 lg:space-x-8">
                            <div className="text-center">
                                <span className="block text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">{userProfile.bookingsCount}</span>
                                <span className="text-xs lg:text-sm text-gray-600">Bookings</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">{userProfile.reviewsCount}</span>
                                <span className="text-xs lg:text-sm text-gray-600">Reviews</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">{userProfile.savedSpots}</span>
                                <span className="text-xs lg:text-sm text-gray-600">Saved</span>
                            </div>
                        </div>

                        {/* Profile Actions */}
                        <div className="flex space-x-3">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 lg:py-3 lg:px-6 rounded-lg transition-colors duration-200 flex items-center space-x-2 text-sm lg:text-base"
                                onClick={() => setIsEditing(true)}
                            >
                                <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" />
                                </svg>
                                <span>Edit Profile</span>
                            </button>

                            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 lg:py-3 lg:px-6 rounded-lg transition-colors duration-200 text-sm lg:text-base">
                                Share Profile
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderTabs = () => (
        <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
            <nav className="-mb-px flex space-x-6 lg:space-x-8 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-x-auto">
                {[
                    { key: 'overview', label: 'Overview' },
                    { key: 'bookings', label: 'My Bookings' },
                    { key: 'saved', label: 'Saved Spots' },
                    { key: 'reviews', label: 'My Reviews' }
                ].map((tab) => (
                    <button
                        key={tab.key}
                        className={`py-4 px-1 border-b-2 font-medium text-sm lg:text-base transition-colors duration-200 whitespace-nowrap ${activeTab === tab.key
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        onClick={() => setActiveTab(tab.key)}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>
        </div>
    );

    const renderOverview = () => (
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-6 lg:py-8">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">

                {/* Main Content - Left Side */}
                <div className="xl:col-span-2 space-y-6 lg:space-y-8">

                    {/* Personal Information */}
                    <div className="bg-gray-50 rounded-xl p-4 lg:p-6">
                        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Personal Information</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                <span className="text-gray-900 text-sm lg:text-base">{userProfile.email}</span>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                                <span className="text-gray-900 text-sm lg:text-base">{userProfile.phone}</span>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Member Since</label>
                                <span className="text-gray-900 text-sm lg:text-base">{userProfile.joinDate}</span>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Total Adventures</label>
                                <span className="text-gray-900 text-sm lg:text-base">{userProfile.bookingsCount + userProfile.savedSpots} Experiences</span>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div>
                        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Recent Activity</h3>
                        <div className="space-y-4">
                            {recentBookings.map(booking => (
                                <div key={booking.id} className="flex items-center space-x-4 p-4 lg:p-6 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow duration-200">
                                    <img
                                        src={booking.image}
                                        alt={booking.spotName}
                                        className="w-16 h-16 lg:w-20 lg:h-20 rounded-lg object-cover flex-shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-medium text-gray-900 text-sm lg:text-base mb-1">{booking.spotName}</h4>
                                        <p className="text-sm text-gray-600 mb-2">{booking.location} • {booking.date}</p>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            {booking.status}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-1 text-yellow-500">
                                        <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                                        </svg>
                                        <span className="text-sm lg:text-base font-medium text-gray-900">{booking.rating}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Sidebar - Right Side */}
                <div className="space-y-6 lg:space-y-8">

                    {/* Quick Stats Card */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-4 lg:p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Adventure Statistics</h4>
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Average Rating</span>
                                <span className="font-medium text-gray-900">4.8 ⭐</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Favorite Location</span>
                                <span className="font-medium text-gray-900">Cherrapunji</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm text-gray-600">Next Adventure</span>
                                <span className="font-medium text-gray-900">Oct 15, 2024</span>
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Achievements</h4>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">🏕️</span>
                                <div>
                                    <p className="font-medium text-sm">Camping Expert</p>
                                    <p className="text-xs text-gray-500">10+ camping experiences</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">🌉</span>
                                <div>
                                    <p className="font-medium text-sm">Bridge Explorer</p>
                                    <p className="text-xs text-gray-500">Visited 3 root bridges</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-2xl">⭐</span>
                                <div>
                                    <p className="font-medium text-sm">Top Reviewer</p>
                                    <p className="text-xs text-gray-500">8 detailed reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderBookings = () => (
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-6 lg:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 lg:mb-8">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 sm:mb-0">My Bookings</h3>
                <div className="flex space-x-3">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>All Bookings</option>
                        <option>Completed</option>
                        <option>Upcoming</option>
                        <option>Cancelled</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {recentBookings.map(booking => (
                    <div key={booking.id} className="bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                            <img
                                src={booking.image}
                                alt={booking.spotName}
                                className="w-full lg:w-48 h-48 lg:h-full object-cover flex-shrink-0"
                            />
                            <div className="flex-1 p-4 lg:p-6">
                                <div className="flex flex-col h-full">
                                    <div className="flex-1">
                                        <h4 className="text-lg font-medium text-gray-900 mb-2">{booking.spotName}</h4>
                                        <p className="text-gray-600 mb-2">{booking.location}</p>
                                        <p className="text-sm text-gray-500 mb-3">{booking.date}</p>
                                        <div className="flex items-center space-x-4 mb-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${booking.status === 'Completed'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {booking.status}
                                            </span>
                                            <div className="flex items-center space-x-1 text-yellow-500">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                                                </svg>
                                                <span className="text-sm font-medium text-gray-900">{booking.rating}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex space-x-3">
                                        <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                                            View Details
                                        </button>
                                        <button className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-lg hover:bg-blue-600 transition-colors duration-200">
                                            Book Again
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderSavedSpots = () => (
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-6 lg:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 lg:mb-8">
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 sm:mb-0">Saved Spots</h3>
                <div className="flex space-x-3">
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option>All Categories</option>
                        <option>Camping</option>
                        <option>Adventure</option>
                        <option>Nature</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                {savedSpots.map(spot => (
                    <div key={spot.id} className="relative bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-200 overflow-hidden group">
                        <div className="relative">
                            <img
                                src={spot.image}
                                alt={spot.name}
                                className="w-full h-48 lg:h-56 object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                            <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full transition-all duration-200 shadow-lg">
                                <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-4">
                            <h4 className="font-medium text-gray-900 mb-2 text-sm lg:text-base">{spot.name}</h4>
                            <p className="text-gray-600 text-sm mb-3">{spot.location}</p>
                            <div className="flex items-center justify-between">
                                <span className="text-lg font-bold text-gray-900">{spot.price}</span>
                                <div className="flex items-center space-x-1 text-yellow-500">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                                    </svg>
                                    <span className="text-sm font-medium text-gray-900">{spot.rating}</span>
                                </div>
                            </div>
                            <button className="w-full mt-3 px-4 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors duration-200">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const renderEditModal = () => (
        isEditing && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
                    {/* Modal Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Edit Profile</h3>
                        <button
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                            onClick={handleCancelEdit}
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                            </svg>
                        </button>
                    </div>

                    {/* Modal Body */}
                    <div className="p-6 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={editedProfile.name}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={editedProfile.email}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                            <input
                                type="tel"
                                name="phone"
                                value={editedProfile.phone}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={editedProfile.location}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                            <textarea
                                name="bio"
                                value={editedProfile.bio}
                                onChange={handleInputChange}
                                rows="3"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            />
                        </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="flex space-x-3 p-6 border-t border-gray-200">
                        <button
                            className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                            onClick={handleCancelEdit}
                        >
                            Cancel
                        </button>
                        <button
                            className="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-lg hover:bg-blue-600 transition-colors duration-200"
                            onClick={handleSaveProfile}
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        )
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow-sm">
                {renderProfileHeader()}
                {renderTabs()}

                <div className="min-h-[600px]">
                    {activeTab === 'overview' && renderOverview()}
                    {activeTab === 'bookings' && renderBookings()}
                    {activeTab === 'saved' && renderSavedSpots()}
                    {activeTab === 'reviews' && (
                        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 py-12 text-center">
                            <div className="max-w-md mx-auto">
                                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
                                </svg>
                                <h3 className="text-xl font-medium text-gray-900 mb-2">Reviews Coming Soon</h3>
                                <p className="text-gray-600">Your reviews and ratings will appear here once available.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
