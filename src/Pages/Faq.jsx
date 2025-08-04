import React, { useEffect, useState } from 'react';
import Container from '../Components/Container';
import { ChevronDown, Search } from 'lucide-react';
import Navbar from '../Components/Navbar';
import Loader from '../Components/Loader';

const Faq = () => {
    const [loading, setLoading] = useState(true);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const faqData = [
        {
            title: 'General',
            content: 'This section contains general information about our company policies.',
        },
        {
            title: 'Delivery',
            content: 'We deliver products safely within 3-5 business working days.',
        },
        {
            title: 'Cancellation & Returns',
            content: 'You can cancel or return items within 7 working days.',
        },
        {
            title: 'Membership',
            content: 'Membership provides exclusive deals and priority support to users.',
        },
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    if (loading) return <Loader />;

    return (
        <>
            <Navbar />
            <Container>
                <div className="flex py-5 md:py-8 justify-center">
                    <div className="flex flex-col md:w-[65%] items-start gap-8">
                        <div>
                            <h1 className="text-[30px] md:text-[36px] font-bold">Frequently Asked Questions</h1>
                            <p className="text-[16px] text-gray-600">Find answers to common questions below.</p>
                        </div>
                        <div className="w-full relative">
                            <input
                                type="text"
                                placeholder="Search keywords..."
                                className="border border-gray-300 w-full py-3 px-3 rounded-lg"
                            />
                            <button className="absolute top-4 right-4 text-gray-400">
                                <Search size={20} />
                            </button>
                        </div>
                        <div className="w-full divide-y divide-gray-300">
                            {faqData.map((item, index) => (
                                <div key={index}>
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full text-left py-4 px-6 font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 transition duration-200 relative"
                                    >
                                        {item.title}
                                        <ChevronDown
                                            className={`absolute top-1/2 right-3 transform transition-transform duration-300 ${
                                                openIndex === index ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>

                                    <div
                                        className={`px-6 text-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${
                                            openIndex === index ? 'max-h-40 py-4' : 'max-h-0 py-0'
                                        }`}
                                    >
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Faq;
