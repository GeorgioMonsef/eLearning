import React from 'react';
import gradImage from './gradImage.jpg';

const CardGrid = () => {
    return (
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full" src={gradImage} alt="Graduate with diploma" />                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Our mission</div>
                    <p className="text-gray-700 text-base">
                        Our mission is to provide 24/7 support to all students! We understand the stress of cramming last-minute and not having access to a tutor late at night.

                        We started this platform to ensure that every student has access to the help they need, no matter the time of day. Education shouldn't be limited by a schedule; it should be available whenever you need it.

                        Our service is useful because it fits into your busy schedule, providing immediate support. Get answers within an hour or your money back—guaranteed.

                        Learn more about our parent company, Levant Solutions Inc.                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                </div>
            </div>

            {/* Card 2 */}
            <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full" src="/river.jpg" alt="River" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">River</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
                </div>
            </div>

            {/* Card 3 */}
            <div className="rounded overflow-hidden shadow-lg">
                <img className="w-full" src="/forest.jpg" alt="Forest" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Forest</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
                </div>
            </div>
        </div>
    );
};

export default CardGrid;
