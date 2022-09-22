/// <reference types="@sveltejs/kit" />


declare namespace App {
	interface Locals {
		userid: string;
	}

	// interface PageData {}

	// interface PageError {}

	// interface Platform {}
}

declare global { 
	type OrUndefined<Type> = Type | null;
	type OrNull<Type> = Type | null;
	
}   

export {};