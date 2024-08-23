import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '@/redux';

const UserView = () => {

    const userData = useSelector((state: RootState) => state.user.userData);

    return (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="border-t border-gray-200">
                <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className="text-sm font-medium text-gray-500">Name</div>
                        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData?.name}</div>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className="text-sm font-medium text-gray-500">Email</div>
                        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData?.email}</div>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className="text-sm font-medium text-gray-500">Linkedin URL</div>
                        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData?.linkedinURL}</div>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className="text-sm font-medium text-gray-500">Gender</div>
                        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{userData?.gender}</div>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <div className="text-sm font-medium text-gray-500">Address </div>
                        <div className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            <p>{userData?.address.line1}</p>
                            <p>{userData?.address.line2}</p>
                            <p>{userData?.address.state}</p>
                            <p>{userData?.address.city}, {userData?.address.pin}</p>
                        </div>
                    </div>
                </dl>
            </div>
        </div>

    )
}

export default UserView
