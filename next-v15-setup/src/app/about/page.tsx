'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth, useUser } from '@clerk/nextjs';

export default function About() {
	const { isLoaded, userId, sessionId, getToken } = useAuth();
	const router = useRouter();

	if (!isLoaded || !userId) return null;

	const { isLoaded, , isSignedIn, user} = useUser();

	if(!isLoaded || !isSignedIn) return null;
	
	return (
		<div>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas enim
			voluptatum nemo? Iusto, perferendis delectus saepe consectetur illum
			ducimus ab voluptatibus harum provident eos eius accusamus dolorum. Quasi,
			libero ducimus!
			<button
				type='button'
				onClick={() => router.push('/')}
				className='bg-blue-500 text-white p-2 rounded-md'
			>
				Go Home
			</button>
		</div>
	);
}
