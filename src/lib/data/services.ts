import techImage from '$lib/images/tech-comp.jpg';
import serverImage from '$lib/images/server-comp.jpg';
import cyberImage from '$lib/images/robot-shield.png';

export const services = {
	ai: {
		mainText: 'Cutting-Edge Cloud, Cybersecurity, and AI Solutions.',
		description:
			'Cloud, cybersecurity, and AI solutions for success and secure digital transformation.',
		image: techImage
	},
	cloud: {
		mainText: 'Transform Your Business with Scalable Cloud Services.',
		description: 'Innovative cloud solutions for the future of digital transformation.',
		image: serverImage
	},
	cyber: {
		mainText: 'Stay Ahead of Cybersecurity Threats with AI-Driven Solutions.',
		description: 'AI-powered solutions to safeguard and empower your business.',
		image: cyberImage
	}
};

export const feats = {
	ai: {
		title: 'Machine Learning',
		description:
			'Engage our experts to develop and train custom machine learning models that solve complex problems, optimize processes, and drive innovation.',
		features: [
			{
				title: 'Custom Model Development',
				description:
					'Design machine learning models tailored to your business, driving accurate predictions and insightful decision-making.',
				icon: 'carbon:machine-learning'
			},
			{
				title: 'Model Training & Tuning',
				description:
					'Fine-tune your machine learning models for enhanced accuracy and performance, ensuring optimal results.',
				icon: 'carbon:chart-line'
			},
			{
				title: 'Automation & Integration',
				description:
					'Integrate machine learning solutions into your workflows, automating processes and boosting operational efficiency.',
				icon: 'carbon:automatic'
			}
		]
	},
	cloud: {
		title: 'Cloud Service',
		description:
			'Hire us to design and implement scalable cloud infrastructure on AWS, tailored to your specific needs and goals.',
		features: [
			{
				title: 'Scalability',
				description:
					'Easily scale your cloud infrastructure to meet the demands of your business as it grows and evolves.',
				icon: 'carbon:scale'
			},
			{
				title: 'Reliability',
				description:
					'Benefit from robust, high-availability cloud services designed to minimize downtime and ensure seamless operation.',
				icon: 'icon-park-outline:protect'
			},
			{
				title: 'Cost Optimization',
				description:
					'Optimize your cloud spend by implementing cost-effective strategies while maintaining performance and security.',
				icon: 'carbon:currency'
			}
		]
	},
	cyber: {
		title: 'Cybersecurity',
		description:
			'Partner with us to fortify your digital defenses with comprehensive cybersecurity solutions, including threat detection, incident response, and compliance.',
		features: [
			{
				title: 'Threat Detection',
				description:
					'Implement advanced threat detection systems to proactively identify and mitigate risks before they become breaches.',
				icon: 'carbon:warning-alt'
			},
			{
				title: 'Incident Response',
				description:
					'Respond to security incidents quickly and effectively, minimizing potential damage and restoring system integrity.',
				icon: 'carbon:flash'
			},
			{
				title: 'Compliance',
				description:
					'Ensure your systems meet industry standards and regulatory compliance for data protection and privacy.',
				icon: 'carbon:document-security'
			}
		]
	}
};
