import React from 'react';
import { Coffee, Users, Heart, TrendingUp, Award, Globe, BookOpen, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            {/* Hero Section */}
            <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white">
                <div className="container mx-auto px-4 py-16 md:py-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex justify-center mb-6">
                            <Coffee className="w-16 h-16" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Get Me a Coffee</h1>
                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                            A crowdfunding platform designed for creators to fund their projects with the support of their fans. 
                            It&apos;s a space where your fans can directly contribute to your creative endeavors by buying you a coffee.
                        </p>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:shadow-blue-900/50 transition-all border border-gray-700">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-20 h-20 rounded-full" src="/group.gif" alt="Fans Want to Collaborate" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-3 text-blue-400">Fans Want to Collaborate</h3>
                                <p className="text-gray-300 leading-relaxed">Your fans are enthusiastic about collaborating with you on your projects and seeing your creative vision come to life.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:shadow-blue-900/50 transition-all border border-gray-700">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0">
                                <img className="w-20 h-20 rounded-full" src="/coin.gif" alt="Support Through Chai" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold mb-3 text-blue-400">Support Through Coffee</h3>
                                <p className="text-gray-300 leading-relaxed">Receive support from your fans in the form of coffee purchases, directly contributing to your project funding.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Benefits Section */}
            <div className="bg-gray-800/50 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Creators Benefits */}
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-700">
                            <div className="flex items-center mb-6">
                                <div className="bg-blue-600 rounded-full p-3 mr-4">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">For Creators</h2>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-3 text-xl">✓</span>
                                    <span className="text-gray-300">Direct financial support from your fanbase</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-3 text-xl">✓</span>
                                    <span className="text-gray-300">Engage with your fans on a more personal level</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-3 text-xl">✓</span>
                                    <span className="text-gray-300">Access to a platform tailored for creative projects</span>
                                </li>
                            </ul>
                        </div>

                        {/* Fans Benefits */}
                        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-700">
                            <div className="flex items-center mb-6">
                                <div className="bg-blue-600 rounded-full p-3 mr-4">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <h2 className="text-3xl font-bold text-white">For Fans</h2>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-3 text-xl">✓</span>
                                    <span className="text-gray-300">Directly contribute to the success of your favorite creators</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-3 text-xl">✓</span>
                                    <span className="text-gray-300">Exclusive rewards and perks for supporting creators</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-400 mr-3 text-xl">✓</span>
                                    <span className="text-gray-300">Be part of the creative process and connect with creators</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {/* Collaboration Card */}
                    <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:shadow-blue-900/50 transition-all hover:-translate-y-1 border border-gray-700">
                        <div className="bg-blue-900 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                            <Users className="w-7 h-7 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">Collaboration</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Unlock new opportunities</li>
                            <li>• Expand your network</li>
                            <li>• Combine skills & resources</li>
                        </ul>
                    </div>

                    {/* Community Card */}
                    <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:shadow-blue-900/50 transition-all hover:-translate-y-1 border border-gray-700">
                        <div className="bg-blue-900 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                            <MessageCircle className="w-7 h-7 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">Community</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Supportive environment</li>
                            <li>• Valuable feedback</li>
                            <li>• Engaging discussions</li>
                        </ul>
                    </div>

                    {/* Resources Card */}
                    <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:shadow-blue-900/50 transition-all hover:-translate-y-1 border border-gray-700">
                        <div className="bg-blue-900 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                            <BookOpen className="w-7 h-7 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">Resources</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Tutorials & templates</li>
                            <li>• Expert mentorship</li>
                            <li>• Industry insights</li>
                        </ul>
                    </div>

                    {/* Recognition Card */}
                    <div className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl hover:shadow-blue-900/50 transition-all hover:-translate-y-1 border border-gray-700">
                        <div className="bg-blue-900 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                            <Award className="w-7 h-7 text-blue-400" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-white">Recognition</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li>• Global showcase</li>
                            <li>• Featured promotions</li>
                            <li>• Build credibility</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]py-16">
                <div className="container mx-auto px-4 text-center">
                    <div className="max-w-3xl mx-auto ">
                        <Globe className="w-16 h-16 text-white mx-auto mb-4" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join Our Creative Community</h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Be part of a community that values creativity, diversity, and inclusivity. 
                            Find encouragement, collaborate on projects, and grow together.
                        </p>

                         <Link href={"/login"}>
                        <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors shadow-lg mb-3">
                            Get Started Today
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;