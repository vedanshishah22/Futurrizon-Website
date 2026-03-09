import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UploadCloud, CheckCircle } from 'lucide-react';

export default function JobApplicationModal({ isOpen, onClose, jobTitle }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [fileName, setFileName] = useState('');
    
    const [mobileNo, setMobileNo] = useState('');
    const [mobileError, setMobileError] = useState('');

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleMobileChange = (e) => {
        const value = e.target.value;
        // Allow only numbers
        if (value === '' || /^\d+$/.test(value)) {
            setMobileNo(value);
            // Clear error if they start typing again or it's valid so far
            if (mobileError) setMobileError('');
        }
    };

    const validateMobile = () => {
        if (!mobileNo) {
            setMobileError('Mobile number is required');
            return false;
        }
        // Generic 10 digit check
        if (!/^\d{10}$/.test(mobileNo)) {
            setMobileError('Please enter a valid 10-digit mobile number');
            return false;
        }
        setMobileError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Trigger validation
        const isMobileValid = validateMobile();
        if (!isMobileValid) return;

        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                // Reset form state on close
                setMobileNo('');
                setMobileError('');
                setFileName('');
                onClose();
            }, 2000);
        }, 1500);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/80 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl relative overflow-hidden my-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-primary/10">
                            <div>
                                <h3 className="text-2xl font-display font-bold text-primary">Apply for this job</h3>
                                {jobTitle && <p className="text-primary/60 text-sm mt-1">Position: <span className="font-semibold">{jobTitle}</span></p>}
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full bg-primary/5 text-primary/60 flex items-center justify-center hover:bg-orange/10 hover:text-orange transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body content */}
                        {isSuccess ? (
                            <div className="p-12 flex flex-col items-center justify-center text-center min-h-[400px]">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring" }}
                                    className="w-20 h-20 rounded-full bg-green-100 text-green-500 flex items-center justify-center mb-6"
                                >
                                    <CheckCircle size={40} />
                                </motion.div>
                                <h4 className="text-2xl font-display font-bold text-primary mb-2">Application Submitted!</h4>
                                <p className="text-primary/60 mb-6 max-w-sm">Thank you for your interest in joining Futurrizon. Our team will review your application and get back to you soon.</p>
                                <button
                                    onClick={onClose}
                                    className="px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto custom-scrollbar">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Section */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                        <div className="w-full">
                                            <label className="block text-primary/80 text-sm font-semibold mb-2">First Name *</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-transparent focus:bg-white focus:border-orange/50 focus:ring-2 focus:ring-orange/20 outline-none transition-all text-primary" />
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-primary/80 text-sm font-semibold mb-2">Middle Name</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-transparent focus:bg-white focus:border-orange/50 focus:ring-2 focus:ring-orange/20 outline-none transition-all text-primary" />
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-primary/80 text-sm font-semibold mb-2">Last Name *</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-transparent focus:bg-white focus:border-orange/50 focus:ring-2 focus:ring-orange/20 outline-none transition-all text-primary" />
                                        </div>
                                    </div>

                                    {/* Contact Section */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                        <div className="w-full">
                                            <label className="block text-primary/80 text-sm font-semibold mb-2">Email Address *</label>
                                            <input required type="email" className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-transparent focus:bg-white focus:border-orange/50 focus:ring-2 focus:ring-orange/20 outline-none transition-all text-primary" />
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-primary/80 text-sm font-semibold mb-2">Mobile No. *</label>
                                            <input 
                                                required 
                                                type="tel" 
                                                value={mobileNo}
                                                onChange={handleMobileChange}
                                                onBlur={validateMobile}
                                                maxLength={10}
                                                placeholder="10-digit number"
                                                className={`w-full px-4 py-3 rounded-xl bg-primary/5 border focus:bg-white focus:ring-2 outline-none transition-all text-primary ${
                                                    mobileError 
                                                        ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                                                        : 'border-transparent focus:border-orange/50 focus:ring-orange/20'
                                                }`} 
                                            />
                                            {mobileError && (
                                                <p className="text-red-500 text-xs mt-1.5 font-medium">{mobileError}</p>
                                            )}
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-primary/80 text-sm font-semibold mb-2">Alternative Contact No.</label>
                                            <input type="tel" className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-transparent focus:bg-white focus:border-orange/50 focus:ring-2 focus:ring-orange/20 outline-none transition-all text-primary" />
                                        </div>
                                    </div>

                                    {/* Professional Details Row 1 */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                        <div className="w-full">
                                            <label className="block text-primary/80 text-sm font-semibold mb-2">Experience *</label>
                                            <div className="flex gap-2">
                                                <select required className="flex-1 px-4 py-3 rounded-xl bg-primary/5 border border-transparent focus:bg-white focus:border-orange/50 focus:ring-2 focus:ring-orange/20 outline-none transition-all text-primary appearance-none cursor-pointer">
                                                    <option value="">Year</option>
                                                    {[...Array(21)].map((_, i) => <option key={i} value={i}>{i} Year</option>)}
                                                </select>
                                                <select className="flex-1 px-4 py-3 rounded-xl bg-primary/5 border border-transparent focus:bg-white focus:border-orange/50 focus:ring-2 focus:ring-orange/20 outline-none transition-all text-primary appearance-none cursor-pointer">
                                                    <option value="">Month</option>
                                                    {[...Array(12)].map((_, i) => <option key={i} value={i}>{i} Month</option>)}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-primary/80 text-sm font-semibold mb-2">Current Job Location</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-transparent focus:bg-white focus:border-orange/50 focus:ring-2 focus:ring-orange/20 outline-none transition-all text-primary" />
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-primary/80 text-sm font-semibold mb-2">Highest Qualification *</label>
                                            <input required type="text" className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-transparent focus:bg-white focus:border-orange/50 focus:ring-2 focus:ring-orange/20 outline-none transition-all text-primary" />
                                        </div>
                                    </div>

                                    {/* Professional Details Row 2 */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                        <div className="w-full">
                                            <label className="block text-primary/80 text-sm font-semibold mb-2">Current Company</label>
                                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-transparent focus:bg-white focus:border-orange/50 focus:ring-2 focus:ring-orange/20 outline-none transition-all text-primary" />
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-primary/80 text-sm font-semibold mb-2">Current CTC</label>
                                            <input type="text" placeholder="e.g. 5 LPA" className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-transparent focus:bg-white focus:border-orange/50 focus:ring-2 focus:ring-orange/20 outline-none transition-all text-primary" />
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-primary/80 text-sm font-semibold mb-2">Expected CTC *</label>
                                            <input required type="text" placeholder="e.g. 8 LPA" className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-transparent focus:bg-white focus:border-orange/50 focus:ring-2 focus:ring-orange/20 outline-none transition-all text-primary" />
                                        </div>
                                    </div>

                                    {/* Final Row */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="w-full">
                                            <label className="block text-primary/80 text-sm font-semibold mb-2">Notice Period *</label>
                                            <select required className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-transparent focus:bg-white focus:border-orange/50 focus:ring-2 focus:ring-orange/20 outline-none transition-all text-primary appearance-none cursor-pointer">
                                                <option value="">Select Notice Period</option>
                                                <option value="immediate">Immediate Joiner</option>
                                                <option value="15days">15 Days</option>
                                                <option value="30days">30 Days</option>
                                                <option value="60days">60 Days</option>
                                                <option value="90days">90 Days</option>
                                            </select>
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-primary/80 text-sm font-semibold mb-2">Upload Resume *</label>
                                            <div className="relative group">
                                                <input 
                                                    type="file" 
                                                    accept=".pdf,.doc,.docx" 
                                                    required 
                                                    onChange={handleFileChange}
                                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" 
                                                />
                                                <div className="w-full px-4 py-3 rounded-xl bg-primary/5 border border-dashed border-primary/20 group-hover:border-orange/50 group-hover:bg-orange/5 flex items-center gap-3 transition-colors text-primary pointer-events-none">
                                                    <UploadCloud className="text-primary/40 group-hover:text-orange transition-colors shrink-0" size={20} />
                                                    <span className="text-sm truncate text-primary/70">{fileName || 'Choose file (.pdf, .doc)'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-4 border-t border-primary/10">
                                        <button 
                                            type="submit" 
                                            disabled={isSubmitting}
                                            className="px-8 py-3 rounded-xl bg-orange text-white font-semibold flex items-center justify-center gap-2 hover:bg-orange/90 shadow-lg shadow-orange/20 transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-70 disabled:pointer-events-none disabled:transform-none"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                                                    Submitting...
                                                </>
                                            ) : (
                                                'Submit Application'
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
