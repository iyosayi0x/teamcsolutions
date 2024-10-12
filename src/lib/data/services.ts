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
			'Develop and train custom AI models to solve complex problems and drive innovation.',
		features: [
			{
				title: 'Custom Model Development',
				description: 'Design tailored AI models for accurate predictions and informed decisions.',
				icon: 'carbon:machine-learning'
			},
			{
				title: 'Model Training & Tuning',
				description: 'Fine-tune models for optimal accuracy and performance.',
				icon: 'carbon:chart-line'
			},
			{
				title: 'Automation & Integration',
				description: 'Integrate AI solutions into workflows for efficient automation.',
				icon: 'carbon:automatic'
			}
		]
	},
	cloud: {
		title: 'Cloud Services',
		description:
			'Design and implement scalable cloud infrastructure on AWS for your specific needs.',
		features: [
			{
				title: 'Scalability',
				description: 'Easily scale cloud infrastructure to meet growing business demands.',
				icon: 'carbon:scale'
			},
			{
				title: 'Reliability',
				description: 'Benefit from robust, high-availability cloud services for minimal downtime.',
				icon: 'icon-park-outline:protect'
			},
			{
				title: 'Cost Optimization',
				description: 'Optimize cloud spending while maintaining performance and security.',
				icon: 'carbon:currency'
			}
		]
	},
	cyber: {
		title: 'Cybersecurity',
		description: 'Fortify your digital defenses with comprehensive cybersecurity solutions.',
		features: [
			{
				title: 'Threat Detection',
				description: 'Proactively identify and mitigate risks with advanced threat detection.',
				icon: 'carbon:warning-alt'
			},
			{
				title: 'Incident Response',
				description: 'Respond to security incidents quickly and effectively, minimizing damage.',
				icon: 'carbon:flash'
			},
			{
				title: 'Compliance',
				description:
					'Ensure compliance with industry standards and regulations for data protection.',
				icon: 'carbon:document-security'
			}
		]
	}
};

export const benefits = {
	ai: {
		title: 'Benefits of AI Services',
		benefits: [
			{
				title: 'Enhanced Decision-Making',
				description: 'Leverage AI insights for more accurate and informed decision-making.'
			},
			{
				title: 'Automated Processes',
				description: 'Automate routine tasks to improve efficiency and reduce errors.'
			},
			{
				title: 'Scalable and Adaptable AI',
				description: 'AI models that grow and evolve with your business needs.'
			}
		]
	},
	cyber: {
		title: 'Cybersecurity Benefits',
		benefits: [
			{
				title: 'Proactive Threat Prevention',
				description: 'Identify and address vulnerabilities before they become breaches.'
			},
			{
				title: 'Rapid Incident Response',
				description: 'Minimize downtime and recover from security incidents quickly.'
			},
			{
				title: 'Data Privacy and Compliance',
				description: 'Ensure compliance with regulations and protect sensitive data.'
			}
		]
	},
	cloud: {
		title: 'Cloud Services Benefits',
		benefits: [
			{
				title: 'Scalability and Flexibility',
				description: 'Easily adjust resources to meet changing business demands.'
			},
			{
				title: 'High Availability and Reliability',
				description: 'Ensure minimal downtime and consistent performance.'
			},
			{
				title: 'Cost Optimization',
				description: 'Optimize cloud spending while maintaining performance and security.'
			}
		]
	}
};
