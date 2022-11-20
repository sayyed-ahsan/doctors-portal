import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageDoctors = () => {

    const { data: doctors } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/doctors`);
                const data = await res.json();
                console.log(data)
                return data;
            }
            catch (error) {
                console.log(error)
            }
        }
    })

    return (
        <div className='bg-[#ecfeff] p-8 min-h-screen'>
            <h1 className='text-2xl my-4'>All Users</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors?.map((doctor, i) =>
                                <tr className="hover">
                                    <th>{i + 1}</th>
                                    <th>
                                        <div className="avatar">
                                            <div className="w-8 rounded-full">
                                                <img src={doctor.image} />
                                            </div>
                                        </div>
                                    </th>
                                    <td>{doctor?.name}</td>
                                    <td>{doctor?.email}</td>
                                    <td>{doctor?.specialty}</td>
                                    <td><button className='btn btn-error btn-sm'>Delete</button></td>

                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageDoctors;