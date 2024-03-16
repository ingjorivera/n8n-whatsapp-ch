import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class WhatsappCH implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'NASA Pics',
name: 'WhatsappCH',
icon: 'file:robot.svg',
group: ['transform'],
version: 1,
subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
description: 'Actions for Whatsapp web from Chris Hubert',
defaults: {
	name: 'WhatsappCH',
},
inputs: ['main'],
outputs: ['main'],
credentials: [
	{
		name: 'WhatsappCHApi',
		required: true,
	},
],
requestDefaults: {
	baseURL: 'https://wap.backendriverastudio.site',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
},
		properties: [
		// Resources and operations will go here
			{
				displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Astronomy Picture of the Day',
				value: 'astronomyPictureOfTheDay',
			},
			{
				name: 'Mars Rover Photo',
				value: 'marsRoverPhotos',
			},
		],
		default: 'astronomyPictureOfTheDay',
			}
		],

	};
}
