'use client';
import React, { useState, useEffect } from 'react';

export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	phone: string;
};

export default function USerClient() {
	const [users, setUsers] = useState<User[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		async function getUsers() {
			try {
				const res = await fetch('https://jsonplaceholder.typicode.com/users');
				if (!res.ok) {
					throw new Error('Failed to fetch users.');
				}
				const usersData = await res.json();
				if (usersData.length) {
					setUsers(usersData);
				}
			} catch (err) {
				setError('Failed to fetch users.');
				if (err instanceof Error) {
					setError(`Failed to fetch users: ${err.message}`);
				}
			} finally {
				setLoading(false);
			}
		}
		getUsers();
	}, []);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<ul className='space-y-4 p-4'>
			{users.map((user: User) => (
				<li
					key={user.id}
					className='p-4 bg-white shadow-md rounded-lg text-gray-700'
				>
					{user.name} {user.email}
				</li>
			))}
		</ul>
	);
}
