import { ServiceData } from '@/types';
import { allGalleryImages } from './gallery';

export const services: ServiceData[] = [
  {
    slug: 'garden',
    title: 'Garden Services',
    headline: "When We Get Involved, It's Not Only The Grass That Becomes Greener, It's The Whole Garden.",
    subheadline: 'Lush Greens are Not Just a Dream Anymore',
    description:
      'From overgrown plots to beautiful outdoor sanctuaries, our garden team transforms spaces of every size across London, Essex and Kent. Whether you need a full garden makeover, new turf, planting, or ongoing maintenance, Nick and the team bring the same care and attention to every job — delivered on time, within budget, and to the highest standard.',
    features: [
      'Full garden clearance and redesign',
      'Turf laying and lawn preparation',
      'Planting, pruning and weeding',
      'Edging, mowing and maintenance',
      'Raised beds and planters',
      'No hidden charges — upfront quotes',
      'Free estimates available',
      'Licensed and fully insured',
    ],
    faqs: [
      {
        question: 'How much do garden services cost?',
        answer:
          'The rates can vary depending on the task involved and the result expected. Before engaging us, we suggest that you share your requirements and request a quote from us.',
      },
      {
        question: 'Can you help prepare land for planting?',
        answer:
          'Yes, we can help you prepare the land by removing the dead weed and spreading the fertiliser. However, keep in mind that, in some cases, you may require planning permission.',
      },
      {
        question: 'What maintenance services are included?',
        answer:
          'As per the size and condition of your garden, the maintenance services can include: edging, trimming, mowing, pruning, weeding, and cleaning the leaves.',
      },
      {
        question: 'How often should maintenance be done?',
        answer:
          'For ideal maintenance, we recommend calling a gardener once every week, or, at the very least, twice a month.',
      },
    ],
    heroImage: '/assets/propaving/gallery-05.jpg',
    galleryImages: allGalleryImages.slice(0, 8),
    metaTitle: 'Garden Services London & Essex | Pro Paving & Landscaping',
    metaDescription:
      'Professional garden maintenance and transformation in London, Essex and Kent. Mowing, pruning, turf laying and full garden makeovers. Call 07747 193288 for a free quote.',
  },
  {
    slug: 'landscaping',
    title: 'Landscaping Services',
    headline: 'Landscaping Services',
    subheadline: 'Complete Outdoor Transformations for London, Essex & Kent',
    description:
      'Landscaping is about more than cutting grass — it is the complete transformation of your outdoor space. Our expert landscaping team works with residential and commercial clients across London, Essex and Kent to design and build stunning gardens, patios, pathways and structures that stand the test of time. Whether you have a budget or big ambitions, we make it happen.',
    features: [
      'Full garden and outdoor space design',
      'Patios, pathways and structures',
      'Tree and shrub planting',
      'Land preparation and levelling',
      'Residential and commercial projects',
      'Budget-conscious planning available',
      'Licensed and fully insured',
      'Free estimates — no obligation',
    ],
    faqs: [
      {
        question: 'What does landscaping involve?',
        answer:
          'Landscaping involves multiple things like land manipulation, erecting structures, and planting trees and shrubs. In simple terms, it is a complete makeover of your garden.',
      },
      {
        question: "What's the difference between gardening and landscaping?",
        answer:
          'Gardening is more focused on keeping your plantation alive and well. Whereas, landscaping involves the transformation of your entire garden by building patios, adding fences and pathways, etc.',
      },
      {
        question: 'Can landscaping work on a budget?',
        answer:
          'Yes, everything is possible. While we may not be able to give you the Garden of Eden on a tight budget, we do our best to meet your expectations as closely as possible. Why not ask us for a quote?',
      },
      {
        question: 'Should I consider landscaping for a small garden?',
        answer:
          'Whether landscaping is right for your garden is not a matter of the size of the garden but what you want to do with it. If you are unsure of how you want to use your garden, set up a meeting with us and we can throw around ideas until we find something that meets your expectations.',
      },
    ],
    heroImage: '/assets/propaving/gallery-10.jpg',
    galleryImages: allGalleryImages.slice(8, 16),
    metaTitle: 'Landscaping Services London & Essex | Pro Paving & Landscaping',
    metaDescription:
      'Complete garden landscaping in London, Essex and Kent. Patios, pathways, structures and planting. Free quotes from expert landscapers. Call 07747 193288.',
  },
  {
    slug: 'driveways',
    title: 'Driveway Installation',
    headline: 'Great Homes Deserve Beautiful Driveways',
    subheadline: 'We Do Driveways Right',
    description:
      'Your driveway is the first thing visitors see — and it can significantly boost your property value. Our expert team installs driveways in block paving, gravel, concrete, and decorative finishes across London, Essex and Kent. Every driveway project is delivered with precision, using quality materials, and backed by our satisfaction guarantee.',
    features: [
      'Block paving driveways',
      'Gravel and resin driveways',
      'Concrete driveway installation',
      'Decorative finishes available',
      'Kerbing and edging included',
      'No hidden charges',
      'Free estimates — call today',
      'Fully insured team',
    ],
    faqs: [
      {
        question: "What's the cheapest driveway option?",
        answer:
          'The answer to this actually depends on your budget. However, driveways constructed using gravel are the cheapest.',
      },
      {
        question: 'Are there low-maintenance driveway options?',
        answer:
          'Yes, there are various low-maintenance driveway options available. Unfortunately, not all the options are suitable for every house or commercial building. Share your requirements with us and we can help you find the best option. Call now!',
      },
      {
        question: "What's the most durable driveway surface?",
        answer:
          'Concrete is the most durable surface for driveways. However, its costs are noticeably high and can only be installed by professionals. It can also easily withstand harsh weather conditions.',
      },
      {
        question: "What's the ideal gravel thickness for driveways?",
        answer:
          'The ideal gravel thickness is around 6 inches. Nonetheless, on a tighter budget, up to 2 inches can be shed off from the depth.',
      },
    ],
    heroImage: '/assets/propaving/gallery-15.jpg',
    galleryImages: allGalleryImages.slice(16, 24),
    metaTitle: 'Driveway Installation Essex & London | Pro Paving & Landscaping',
    metaDescription:
      'Expert driveway installation in London, Essex and Kent. Block paving, gravel and concrete driveways. Competitive prices. Call 07747 193288 for a free quote.',
  },
  {
    slug: 'fencing',
    title: 'Fencing Installation',
    headline: 'The Facelift That Every Home Deserves',
    subheadline: 'Unlimited Styles, Endless Finishes',
    description:
      'The right fence transforms a property — adding privacy, security, kerb appeal and lasting value. Our fencing team installs all styles and materials across London, Essex and Kent, from traditional timber panels to contemporary close-board and decorative fencing. We take care of everything, from planning advice to professional fitting.',
    features: [
      'Timber and close-board fencing',
      'Decorative and contemporary styles',
      'Concrete post and panel systems',
      'Gate supply and installation',
      'Planning permission advice',
      'All styles and finishes available',
      'No hidden charges',
      'Fully insured — licensed team',
    ],
    faqs: [
      {
        question: 'Do I need planning permission for a fence?',
        answer:
          'You may require planning permission if you want to put a fence that is higher than 6.5 feet.',
      },
      {
        question: 'How high can a fence be with planning permission?',
        answer:
          "According to UK law, if you have acquired the planning permission, you can install a fence that's as high as a hundred meters. Though, it isn't advised to go higher than 8 feet.",
      },
      {
        question: 'What affects the cost of fencing?',
        answer:
          'Apart from the labour charges, the cost of fencing can vary depending on the type of material and finish you prefer to have installed.',
      },
      {
        question: "Do I need my neighbour's permission for fencing?",
        answer:
          "You usually don't need your neighbour's permission to have a fence installed. Just ensure that the fencing remains under the bounds of your property.",
      },
    ],
    heroImage: '/assets/propaving/gallery-20.jpg',
    galleryImages: allGalleryImages.slice(24, 32),
    metaTitle: 'Fencing Installation London & Essex | Pro Paving & Landscaping',
    metaDescription:
      'Professional fence installation in London, Essex and Kent. All styles and finishes. Fully insured contractors. Call 07747 193288 for a free quote.',
  },
  {
    slug: 'paving',
    title: 'Paving & Patios',
    headline: 'A Garden Without Paving Is Like Tea Without A Biscuit',
    subheadline: 'Give Your Garden a Durable & Beautiful Paving',
    description:
      'Quality paving transforms an ordinary garden into a functional, beautiful outdoor space. Our experienced paving team installs driveways, patios, paths and decorative stonework across London, Essex and Kent using premium materials that are built to last 25 years or more. From sandstone slabs to block paving, we deliver results that enhance your home and add real value.',
    features: [
      'Patio design and installation',
      'Block paving and sandstone slabs',
      'Decorative paths and borders',
      'Porcelain and natural stone',
      'Driveways and forecourts',
      'Long-lasting — up to 25 years',
      'Free estimates available',
      'Licensed and fully insured',
    ],
    faqs: [
      {
        question: 'How do we clean old paving?',
        answer:
          'Many DIY cleaning methods can be found online to clean old paving. However, if your paving has not been cleaned professionally in a long while, we suggest you ask the pros for help.',
      },
      {
        question: 'Which is better: block paving or other options?',
        answer:
          'Block paving is often more long-lasting. But it is not always the solution. Depending on the vehicle load to be borne, either option can be suitable.',
      },
      {
        question: 'Is block paving expensive?',
        answer:
          "Yes, block paving can be expensive comparatively. If budget is not a problem or you don't want to compromise on the quality of your paving, we always suggest going with block paving.",
      },
      {
        question: 'How long does professional paving last?',
        answer:
          "A professionally laid paving of high-quality material can last for a quarter of a century. That's 25 years. It can also add to the value of your property and, at times, can also be its selling point.",
      },
    ],
    heroImage: '/assets/propaving/gallery-25.jpg',
    galleryImages: allGalleryImages.slice(29, 37),
    metaTitle: 'Paving Services London & Essex | Pro Paving & Landscaping',
    metaDescription:
      'Block paving, slabs and decorative paths across London, Essex and Kent. 25-year lasting results. Free quotes available. Call 07747 193288.',
  },
];
