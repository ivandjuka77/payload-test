'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Search,
  Globe,
  Menu,
  X,
  ChevronDown,
  Paintbrush,
  Factory,
  FlaskConical,
  SprayCan,
  Atom,
  FileText,
  Home,
  Palette,
  ArrowRight,
  Box,
  CarFront,
  Microscope,
  Beaker,
  ClipboardCheck,
  Sparkles,
  Lightbulb,
  Check,
} from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
// import industries from '@/data/industries'

// import { Industry } from '@/types/industries';

const industries: Record<string, Industry> = {
  automotive: {
    // Temporary
    applicationsCompact: ['Application 1', 'Application 2', 'Application 3'],
    // ---

    slug: 'automotive',
    name: 'the Automotive Industry',
    description:
      'We provide essential chemical intermediates for the automotive industry, including low-VOC coatings, adhesives, and cleaning agents that meet strict quality and environmental standards. Our solutions help manufacturers innovate and ensure compliance.',
    featuredImage:
      'https://images.pexels.com/photos/3422964/pexels-photo-3422964.jpeg?auto=compress&cs=tinysrgb&w=1200',

    challenges: [
      {
        title: 'Advanced Automotive Coatings (OEM & Refinish)',
        challengeLink: 'advanced-automotive-coatings',
        challenge:
          'Developing durable, high-performance, and environmentally compliant coatings (primers, basecoats, clearcoats) for vehicle bodies and components.',
        solution:
          'We supply key raw materials essential for modern automotive coatings. DMPA (CAS 4767-03-7) and DMBA (CAS 10097-02-6) are critical for producing waterborne Polyurethane Dispersions (PUDs) and polyester/alkyd resins used in eco-friendly, low-VOC automotive paints, contributing to excellent finish quality. HPVA (CAS 4835-90-9), particularly via its derivative HPN, is used in primers and solvent-borne paints to enhance properties like chip resistance. These methylolalkanoic acids are vital components for prime autocoatings.',
        image:
          'https://images.pexels.com/photos/14615263/pexels-photo-14615263.jpeg?auto=compress&cs=tinysrgb&w=1200',
        relatedProducts: ['dmpa', 'dmba'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'High-Performance Automotive Adhesives',
        challengeLink: 'high-performance-automotive-adhesives',
        challenge:
          'Bonding diverse materials securely and durably is essential in modern vehicle construction, often requiring high-performance adhesives, including waterborne systems.',
        solution:
          'DMBA (CAS 10097-02-6) serves as a crucial component in waterborne polyurethane, epoxy, and polyester adhesives used in automotive assembly. It enhances bonding strength and improves water resistance, contributing to the overall structural integrity and longevity of the vehicle.',
        image:
          'https://images.pexels.com/photos/8478276/pexels-photo-8478276.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Surface Preparation & Cleaning',
        challengeLink: 'surface-preparation-cleaning',
        challenge:
          'Ensuring surfaces are properly cleaned and degreased is critical for achieving optimal adhesion and finish quality in painting, sealing, and bonding operations during automotive manufacturing and repair.',
        solution:
          'We offer OP VUPOL, a specialized degreasing agent recommended for use in the automotive industry. It is effective for applications such as degreasing brake linings and preparing surfaces prior to gluing, sealing, or painting.',
        image:
          'https://images.pexels.com/photos/10162529/pexels-photo-10162529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Component Testing & Compliance (VOCs)',
        challengeLink: 'component-testing-compliance',
        challenge:
          'Meeting stringent industry standards and regulations for materials used in vehicle interiors and components, particularly regarding Volatile Organic Compound (VOC) emissions from plastics.',
        solution:
          'Our accredited ATBEL analytical laboratories (SNAS S-118) provide specialized testing services for the automotive sector, including the determination of VOC content in plastics according to the PV3341 automotive standard. We also offer regulatory support concerning the compliance of chemical raw materials (e.g., REACH).',
        image:
          'https://images.pexels.com/photos/5506047/pexels-photo-5506047.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
    ],
    keyProducts: ['dmpa', 'dmba', 'hpva'],
  },
  coatingsPaintsInks: {
    // Temporary
    applicationsCompact: ['Application 1', 'Application 2', 'Application 3'],
    // ---

    slug: 'coatings-paints-inks',
    name: 'Coatings, Paints & Inks',
    description:
      'The coatings, paints, and inks industry continuously seeks innovations that enhance performance, durability, and environmental compatibility. Formulators face challenges in meeting stringent regulations (like low VOC targets) while delivering exceptional protection, aesthetics, and functionality. VUP, a.s., leverages over 70 years of chemical expertise to provide essential building blocks like Dimethylolpropionic Acid (DMPA) and the unique Dimethylolbutanoic Acid (DMBA), alongside other key intermediates, enabling the production of advanced waterborne systems and high-performance coatings.',
    featuredImage:
      'https://images.pexels.com/photos/16751235/pexels-photo-16751235/free-photo-of-paint-stick-on-blue-wall.jpeg?auto=compress&cs=tinysrgb&w=1200',

    challenges: [
      {
        title: 'Waterborne Coatings (PUDs, Alkyds, Polyesters)',
        challengeLink: 'waterborne-coatings',
        challenge:
          'Developing stable, high-performance waterborne coatings with reduced environmental impact requires specialized hydrophilic monomers.',
        solution:
          'Our DMPA (CAS 4767-03-7) is a versatile building block ensuring stable dispersion of resins (polyurethanes, alkyds, polyesters) in water, leading to lower VOC formulations with enhanced adhesion, gloss, and impact resistance. Our unique DMBA (CAS 10097-02-6) offers potential advantages like superior solubility and faster reaction rates, beneficial for optimizing polyurethane production and application properties. Both are fully REACH registered, supporting regulatory compliance. We also offer Hydroxypivalic Acid (HPVA, CAS 4835-90-9), another key intermediate for durable waterborne resins.',
        image:
          'https://plus.unsplash.com/premium_photo-1682142471398-ccc685f5c849?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29hdGluZ3N8ZW58MHx8MHx8fDA%3D',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Powder Coatings & Resin Modification',
        challengeLink: 'powder-coatings-resin-modification',
        challenge:
          'Achieving optimal flow, leveling, durability, and flexibility in powder coatings and other resin systems often requires specific intermediates.',
        solution:
          'Hydroxypivalic Acid (HPVA) serves as a key intermediate for producing resins, including polyesters used in powder coatings where its derivative (HPN) improves flow and leveling. Acrylate esters of polyhydric alcohols act as versatile monomers providing crosslinking points, influencing hardness, flexibility, and durability in the final coating film.',
        image:
          'https://images.unsplash.com/photo-1673297821205-e0575bbc2ab7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvd2RlcmVkJTIwY29hdGluZ3N8ZW58MHx8MHx8fDA%3D',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Meeting Environmental Regulations (Low VOC)',
        challengeLink: 'environmental-regulations',
        challenge:
          'Adhering to strict environmental regulations, particularly concerning Volatile Organic Compound (VOC) emissions, is critical for market access.',
        solution:
          "By supplying key monomers like DMPA and DMBA that enable high-performance waterborne formulations, VUP directly supports the industry's shift towards lower-VOC and more sustainable coating technologies. Our products are registered under REACH, and our Regulatory Support services can assist clients in navigating compliance requirements for their formulations.",
        image:
          'https://plus.unsplash.com/premium_photo-1682142462983-82489bc75cd9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvYXRpbmd8ZW58MHx8MHx8fDA%3D',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
    ],
    keyProducts: ['dmpa', 'dmba', 'hpva'],
  },
  polymersPlastics: {
    // Temporary
    applicationsCompact: ['Application 1', 'Application 2', 'Application 3'],
    // ---

    slug: 'polymers-plastics',
    name: 'Polymers & Plastics',
    description:
      'The Polymers & Plastics industry relies on innovative chemistry to create materials with specific functionalities, enhanced durability, and improved processing characteristics. From controlling polymerization reactions to protecting final products from degradation, specialized chemical additives and intermediates play a critical role. VUP, a.s. provides key building blocks, stabilizers (like Hindered Amines/HALS), crosslinkers, and polymerization mediators (like TEMPO), supported by extensive R&D and analytical services, enabling our partners to develop advanced polymer solutions.',
    featuredImage:
      'https://images.pexels.com/photos/31115985/pexels-photo-31115985/free-photo-of-close-up-of-white-plastic-screw-caps-in-bulk.jpeg?auto=compress&cs=tinysrgb&w=1200',

    challenges: [
      {
        title: 'Polymer Stabilization (Light, Heat, Oxidation)',
        challengeLink: 'polymer-stabilization',
        challenge:
          'Protecting polymers from degradation caused by UV light, heat, and oxidation is crucial for extending product lifespan and maintaining performance, especially in demanding applications.',
        solution:
          'We offer Hindered Amines, including Hindered Amine Light Stabilizers (HALS) derived from our TAA production line. These additives act as potent radical scavengers, significantly inhibiting polymer degradation, preventing cracking and discoloration, and improving the long-term durability of plastics and coatings. Our TEMPO derivatives also contribute to polymer stability.',

        image:
          'https://images.pexels.com/photos/15158323/pexels-photo-15158323/free-photo-of-blue-guitar-pick-in-hand.jpeg?auto=compress&cs=tinysrgb&w=1200',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Controlled Polymerization & Architecture',
        challengeLink: 'controlled-polymerization',
        challenge:
          'Achieving specific polymer properties often requires precise control over molecular weight, polydispersity, and architecture during synthesis.',
        solution:
          'TEMPO (CAS 2564-83-2) functions as a highly effective mediator in Nitroxide-Mediated Polymerization (NMP), allowing for the synthesis of polymers with well-defined structures. This control enables the development of materials with enhanced performance characteristics tailored for specific applications. H-TEMPO (CAS 2226-96-2) can serve as a polymerization inhibitor for process control or storage.',
        image:
          'https://plus.unsplash.com/premium_photo-1681426678542-613c306013e1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UG9seW1lcnxlbnwwfHwwfHx8MA%3D%3D',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Polyurethane Building Blocks',
        challengeLink: 'polyurethane-building-blocks',
        challenge:
          'Formulating high-performance polyurethanes (dispersions, elastomers, adhesives) requires specific intermediates to impart desired properties like water dispersibility, flexibility, and adhesion.',
        solution:
          "We provide key methylolalkanoic acids DMPA (CAS 4767-03-7) and DMBA (CAS 10097-02-6), essential for creating stable waterborne PUDs with enhanced performance. HPVA serves as an intermediate for durable polyester and polyurethane resins. Trimethylolethane (TME, CAS 77-85-0) offers an alternative polyol building block. Additionally, O,O'-Bis(3-aminopropyl)polyethyleneglycol can be used as a reactive component to impart flexibility and hydrophilicity.",
        image:
          'https://images.unsplash.com/photo-1624804642361-a070c6497471?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9seXVyZXRoYW5lJTIwYnVpbGRpbmclMjBibG9ja3N8ZW58MHx8MHx8fDA%3D',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Crosslinking & Property Enhancement',
        challengeLink: 'crosslinking-property-enhancement',
        challenge:
          'Improving the mechanical strength, thermal stability, elasticity, and chemical resistance of polymers often involves creating crosslinked networks within the material.',
        solution:
          'We offer crosslinking agents such as Tetravup (VUP Brand) and Adipic acid dihydrazide. These multifunctional molecules react with polymer chains to enhance structural integrity and performance characteristics critical for demanding applications in adhesives, coatings, elastomers, and plastics.',
        image:
          'https://plus.unsplash.com/premium_photo-1674641195187-99d2160eed5a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cG9seW1lcnxlbnwwfHwwfHx8MA%3D%3D',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Monomers for Polymer Synthesis',
        challengeLink: 'monomers-polymer-synthesis',
        challenge:
          'Creating novel polymers or modifying existing ones often requires specific functional monomers.',
        solution:
          'Our Acrylate esters of polyhydric alcohols serve as essential building blocks providing acrylate functionality for polymerization and crosslinking capabilities, influencing final polymer properties like hardness and durability. Our Custom Synthesis service can also produce specialized monomers tailored to unique requirements.',
        image:
          'https://plus.unsplash.com/premium_photo-1669301638284-ed33553ef8fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9ub21lcnMlMjBmb3IlMjBQb2x5bWVyJTIwU3ludGhlc2lzfGVufDB8fDB8fHww',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
    ],
    keyProducts: ['dmpa', 'dmba', 'hpva'],
  },
  adhesivesSealants: {
    // Temporary
    applicationsCompact: ['Application 1', 'Application 2', 'Application 3'],
    // ---

    slug: 'adhesives-sealants',
    name: 'Adhesives & Sealants',
    description:
      'The Adhesives & Sealants industry demands materials that provide strong, durable bonds, excellent flexibility, and resistance to environmental factors, while increasingly favouring sustainable, low-VOC formulations. VUP, a.s. contributes key chemical intermediates that enable the development of advanced adhesive and sealant systems. We provide specialized building blocks like Dimethylolbutanoic Acid (DMBA) for high-performance waterborne adhesives, Hydroxypivalic Acid (HPVA) derivatives for reactive hot melts, and essential crosslinkers, supporting formulators in meeting performance and regulatory challenges.',
    featuredImage:
      'https://images.pexels.com/photos/6124242/pexels-photo-6124242.jpeg?auto=compress&cs=tinysrgb&w=1200',

    challenges: [
      {
        title: 'Waterborne Adhesive Systems (Polyurethane, Polyester, Epoxy)',
        challengeLink: 'waterborne-adhesive-systems',
        challenge:
          'Formulating high-performance waterborne adhesives requires intermediates that ensure stability, strong bonding, and water resistance.',
        solution:
          'Dimethylolbutanoic Acid (DMBA, CAS 10097-02-6) is a crucial component for waterborne polyurethane, epoxy, and polyester adhesives. Its superior water solubility improves processing efficiency, while its function as a cross-linking agent provides exceptional bonding strength and improved water resistance. Its potentially faster reaction rate can also enhance production throughput. We also offer DMPA, a related methylolalkanoic acid also used in PUDs for adhesives.',
        image:
          'https://plus.unsplash.com/premium_photo-1683141430181-f4cfe16b1e62?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2VhbGFudHxlbnwwfHwwfHx8MA%3D%3D',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Reactive Hot Melt Adhesives & Resin Modification',
        challengeLink: 'reactive-hot-melt-adhesives',
        challenge:
          'Developing solvent-free reactive hot melts with good transparency, adhesion, and flexibility requires specific building blocks.',
        solution:
          "Hydroxypivalic Acid (HPVA, CAS 4835-90-9) is a precursor to Hydroxypivalic Acid Neopentyl Glycol Ester (HPN). HPN acts as a building block for polyurethane resins used in adhesives, contributing a favourable balance of hardness, flexibility, and adhesion. In reactive hot melts, HPN can improve transparency and reduce solvent requirements, supporting lower VOC formulations. VUP's Polyhydric Alcohols also serve as intermediates for resins used in this sector.",
        image:
          'https://images.pexels.com/photos/7180822/pexels-photo-7180822.jpeg?auto=compress&cs=tinysrgb&w=1200',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Enhanced Strength & Durability via Crosslinking',
        challengeLink: 'enhanced-strength-durability',
        challenge:
          'Achieving the necessary mechanical strength, thermal stability, and chemical resistance in high-performance adhesives and sealants often requires effective crosslinking.',
        solution:
          'We provide key crosslinking agents like Adipic acid dihydrazide. These components react within the adhesive or sealant formulation to create robust polymer networks, significantly enhancing the durability and performance characteristics required for demanding applications.',
        image:
          'https://images.pexels.com/photos/5963144/pexels-photo-5963144.jpeg?auto=compress&cs=tinysrgb&w=1200',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Performance Additives & Custom Solutions',
        challengeLink: 'performance-additives-custom-solutions',
        challenge:
          'Unique applications may require specialized additives or intermediates to achieve specific performance targets not met by standard components.',
        solution:
          'TEMPO derivatives show potential for enhancing polymerization processes or improving the thermal/mechanical strength of adhesives. Furthermore, our Custom Synthesis services allow us to develop and produce specific monomers or additives tailored to your unique adhesive or sealant formulation needs, backed by our extensive R&D capabilities.',
        image:
          'https://images.pexels.com/photos/3735769/pexels-photo-3735769.jpeg?auto=compress&cs=tinysrgb&w=1200',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
    ],
    keyProducts: ['dmpa', 'dmba', 'hpva'],
  },
  pharmaceuticals: {
    // Temporary
    applicationsCompact: ['Application 1', 'Application 2', 'Application 3'],
    // ---

    slug: 'pharmaceuticals',
    name: 'Pharmaceuticals & Biotechnology',
    description:
      'The Pharmaceutical and Biotechnology sectors demand exceptional purity, innovative chemistry, and strict adherence to regulatory standards. VUP, a.s. partners with companies in these critical industries by providing key chemical intermediates, specialized diagnostic aids, advanced biomedical materials, and expert R&D and custom synthesis services. Leveraging our 70+ years of chemical expertise, ISO 9001:2015 certification, and accredited analytical capabilities, we support the development and production of vital healthcare solutions.',
    featuredImage:
      'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1200',

    challenges: [
      {
        title: 'API Synthesis & Pharmaceutical Intermediates',
        challengeLink: 'api-synthesis',
        challenge:
          'Sourcing high-purity, reliably supplied raw materials and intermediates is crucial for Active Pharmaceutical Ingredient (API) manufacturing.',
        solution:
          "We specialize in the production of TEMPO (CAS 2564-83-2) and related nitroxide radicals, which serve as versatile catalysts, antioxidants, and raw materials, including use in APIs targeting Parkinson's disease. VUP's Custom Synthesis service provides tailored production of other complex organic intermediates needed for drug development pipelines, backed by robust quality control.",
        image:
          'https://plus.unsplash.com/premium_photo-1661956660871-2cd646709c90?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGhhcm1hY2V1dGljYWwlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Biomedical Materials & Device Coatings',
        challengeLink: 'biomedical-materials',
        challenge:
          'Developing advanced medical devices and therapies often requires specialized biocompatible materials with unique functional properties.',
        solution:
          "VUP is the unique global producer of O,O'-Bis(3-aminopropyl)polyethyleneglycol (DAPEG), a high-value intermediate used to create lubricious, hydrophilic coatings for vascular intervention devices and other surgical applications. Building on this, we have developed pilot capabilities for PEG-diacrylamide (PEGDAA), a derivative with significant potential in tissue engineering, 3D bioprinting, and drug delivery systems. Our R&D team actively collaborates with partners like DSM Biomedical in this area.",
        image:
          'https://plus.unsplash.com/premium_photo-1663039952394-00e73f235728?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGhhcm1hY2V1dGljYWwlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Diagnostic Aids & Healthcare Products',
        challengeLink: 'diagnostic-aids',
        challenge:
          'Reliable and safe consumable materials are essential for routine diagnostic procedures in healthcare settings.',
        solution:
          'We manufacture high-quality diagnostic gels, including GELSON for sonography and EV GEL for ECG/EEG examinations. These products are formulated using safe, dermatology/cosmetic-grade raw materials, are alcohol-free, non-irritating, and meet relevant health standards (Gelson holds a MoH SK health certificate). VUP also produces other fine chemicals and products for healthcare applications.',
        image:
          'https://images.unsplash.com/photo-1729949129758-0b668478dce5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGhhcm1hY2V1dGljYWwlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Drug Discovery & Research Chemicals',
        challengeLink: 'drug-discovery',
        challenge:
          'Researchers require access to specialized, high-purity chemicals and reagents for target identification, screening, and preclinical studies.',
        solution:
          'Our TEMPO derivatives serve as important tools (antioxidants, spin labels) in pharmaceutical research. VUP also produces unique laboratory chemicals specifically for medical applications and offers Custom Synthesis services to provide researchers with novel compounds or specific intermediates needed for their discovery programs.',
        image:
          'https://images.unsplash.com/photo-1631980838946-755ba8443ab7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGhhcm1hY2V1dGljYWwlMjBwcm9kdWN0aW9ufGVufDB8fDB8fHww',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
    ],
    keyProducts: ['dmpa', 'dmba', 'hpva'],
  },
  petrochemicalsRefineries: {
    // Temporary
    applicationsCompact: ['Application 1', 'Application 2', 'Application 3'],
    // ---

    slug: 'petrochemicals-refineries',
    name: 'Petrochemicals & Refineries',
    description:
      'Born from the Petrochemical Research Institute founded in 1950, VUP, a.s. possesses deep historical roots and extensive expertise in petrochemical science and technology. While not a large-scale refiner, we partner with the Petrochemicals & Refineries sector by providing specialized chemical products (like fuel stabilizers and inhibitors), advanced analytical services, custom synthesis of intermediates, and expert R&D support for process optimization and development. Our commitment to quality (ISO 9001) and safety (Responsible Care) makes us a reliable partner for this demanding industry.',
    featuredImage:
      'https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1200',

    challenges: [
      {
        title: 'Fuel Processing, Storage & Stability',
        challengeLink: 'fuel-processing-storage',
        challenge:
          'Ensuring fuel stability during processing, transportation, and storage is critical to prevent degradation, gum formation, and maintain quality specifications.',
        solution:
          'We produce specialized additives like VUPIN H37-B (Antioxidant/UV Stabilizer) designed for fuel processing and storage. Additionally, our expertise extends to polymerization inhibitors like H-TEMPO, which has been successfully used for years in refinery FCC units (e.g., at Slovnaft) to prevent unwanted reactions.',
        image:
          'https://plus.unsplash.com/premium_photo-1682144394281-372331accc78?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGV0cm9jaGVtaWNhbHN8ZW58MHx8MHx8fDA%3D',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Petrochemical Synthesis & Specialty Intermediates',
        challengeLink: 'petrochemical-synthesis',
        challenge:
          'The petrochemical industry requires a wide range of specialized intermediates for downstream applications or specific process needs, often demanding custom chemical synthesis capabilities.',
        solution:
          'Leveraging our strong R&D foundation, we offer Custom Synthesis services for specialty organic intermediates. Our historical and ongoing research expertise includes areas directly relevant to petrochemical feedstocks and derivatives, such as acetylenic alcohols, epoxides, polyhydric alcohols, higher aldehydes, and brominated hydrocarbons.',
        image:
          'https://images.unsplash.com/photo-1570615541379-e6b7ab6d4eb9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGV0cm9jaGVtaWNhbCUyMHN5bnRoZXNpc3xlbnwwfHwwfHx8MA%3D%3D',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Raw Materials for Downstream Industries',
        challengeLink: 'downstream-raw-materials',
        challenge:
          'Refineries and petrochemical plants provide the fundamental building blocks for numerous downstream industries like polymers, plastics, coatings, and adhesives. Suppliers of intermediates for these sectors are key partners.',
        solution:
          'We manufacture key intermediates like DMPA, DMBA, and HPVA, which are derived from petrochemical value chains and are essential raw materials for producing high-performance polyurethanes (PUDs), polyesters, and alkyds used extensively in coatings, adhesives, and polymer applications.',
        image:
          'https://plus.unsplash.com/premium_photo-1682144440391-bece4365baa3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGV0cm9jaGVtaWNhbHN8ZW58MHx8MHx8fDA%3D',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Process Optimization, Analysis & Safety',
        challengeLink: 'process-optimization',
        challenge:
          'Optimizing refinery and petrochemical processes, ensuring product quality, and maintaining high safety standards requires robust analytical support and technical expertise.',
        solution:
          'Our R&D services can assist with process development and optimization. Our accredited ATBEL Division (SNAS S-118) provides comprehensive analytical services relevant to this sector, including gas/liquid chromatography for composition analysis, VOC determination, physical property testing, and extensive technical-safety analyses (flash point, flammability, etc.) crucial for safe handling and process control.',
        image:
          'https://plus.unsplash.com/premium_photo-1682148230470-2b67a322ab34?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBldHJvY2hlbWljYWxzfGVufDB8fDB8fHww',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
    ],
    keyProducts: ['dmpa', 'dmba', 'hpva'],
  },
  batteryEnergyStorage: {
    // Temporary
    applicationsCompact: ['Application 1', 'Application 2', 'Application 3'],
    // ---

    slug: 'battery-energy-storage',
    name: 'Battery & Energy Storage',
    description:
      'The global search for efficient, sustainable, and safe energy storage solutions is driving innovation beyond traditional lithium-ion batteries. Organic Radical Batteries (ORBs) represent a promising frontier, utilizing redox-active organic molecules like TEMPO (2,2,6,6-Tetramethylpiperidinooxy) and its derivatives. VUP, a.s., with its long-standing expertise in the R&D and production of high-purity TEMPO compounds, is positioned to support the development of this next generation of energy storage technology. Our scalable production capabilities and ongoing research efforts aim to provide key materials for ORBs and advanced redox flow batteries.',
    featuredImage:
      'https://images.pexels.com/photos/9800022/pexels-photo-9800022.jpeg?auto=compress&cs=tinysrgb&w=1200',

    challenges: [
      {
        title: 'Organic Radical Batteries (ORBs)',
        challengeLink: 'organic-radical-batteries',
        challenge:
          'Developing high-performance, metal-free, and potentially safer battery systems for applications ranging from portable electronics to grid storage.',
        solution:
          'TEMPO and its derivatives exhibit remarkable electrochemical performance, acting as highly efficient and reversible charge carriers. Their potential use as redox-active materials in ORB electrodes offers advantages like potentially high power density and fast charge/discharge rates. VUP produces high-purity TEMPO suitable for electrochemical research and development in this field.',
        image:
          'https://plus.unsplash.com/premium_photo-1723507297320-2366db25341e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3JnYW5pYyUyMFJhZGljYWwlMjBCYXR0ZXJpZXMlMjAoT1JCcyl8ZW58MHx8MHx8fDA%3D',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Aqueous Redox Flow Batteries',
        challengeLink: 'redox-flow-batteries',
        challenge:
          'Improving the energy density, efficiency, and cost-effectiveness of aqueous redox flow batteries for grid-scale energy storage.',
        solution:
          "Research indicates significant potential for TEMPO-based catholytes to enhance the performance of aqueous redox flow batteries. VUP's expertise in TEMPO chemistry positions us to collaborate on developing and supplying tailored TEMPO derivatives optimized for stability and electrochemical potential in flow battery systems.",
        image:
          'https://images.pexels.com/photos/7904403/pexels-photo-7904403.jpeg?auto=compress&cs=tinysrgb&w=1200',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Material Development & Optimization',
        challengeLink: 'material-development',
        challenge:
          'Optimizing the performance of TEMPO-based batteries requires understanding structure-property relationships and potentially synthesizing novel derivatives with enhanced stability, solubility, or redox potential. Performance optimization regarding energy density and charge/discharge efficiency is a key focus.',
        solution:
          'Leveraging our deep expertise in nitroxide radical chemistry and R&D capabilities, we partner with researchers and companies to develop and synthesize custom TEMPO derivatives. Our goal is to address specific performance bottlenecks and contribute to advancements in ORB and flow battery technology through targeted material innovation. VUP has technologies involving TEMPO ready for scaling up.',
        image:
          'https://images.unsplash.com/photo-1581244249923-172ef5029576?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJhdHRlcmllc3xlbnwwfHwwfHx8MA%3D%3D',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
    ],
    keyProducts: ['dmpa', 'dmba', 'hpva'],
  },
  buildingConstruction: {
    // Temporary
    applicationsCompact: ['Application 1', 'Application 2', 'Application 3'],
    // ---

    slug: 'building-construction',
    name: 'Building & Construction',
    description:
      'The Building & Construction industry continuously seeks materials and chemical solutions that improve durability, process efficiency, safety, and sustainability. VUP, a.s. contributes to this sector by providing specialized chemical preparations designed to enhance concrete and plaster properties (VUPPOR, VUPRANYL), improve formwork efficiency (VUPOFORM), and supply key intermediates (DMBA, DMPA) used in high-performance coatings and adhesives essential for modern construction. Our focus is on delivering reliable chemical solutions that add value to building materials and processes.',
    featuredImage:
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200',

    challenges: [
      {
        title: 'Concrete & Cement Product Enhancement',
        challengeLink: 'concrete-cement-enhancement',
        challenge:
          'Improving the workability of concrete mixes and enhancing the properties of finished concrete products like paving stones, panels, and structures is key for efficiency and performance.',
        solution:
          'VUPPOR is specifically designed as an additive for concrete products. It improves processability and enhances thermal insulation properties. Recommended for a wide range of concrete items including pavings, edge-stones, gardening parts, construction panels, and monolithic constructions, VUPPOR contributes to better quality finished products. It is physiologically harmless and requires no special handling measures beyond standard practices.',
        image:
          'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1200',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Improving Plasters & Coatings',
        challengeLink: 'plasters-coatings',
        challenge:
          'Enhancing the durability, application properties, and crack resistance of synthetic plasters and water-soluble coatings used in construction. Meeting low-VOC requirements for architectural coatings.',
        solution:
          'VUPRANYL, a stable water dispersion, serves as an additive for synthetic plasters and water-soluble coatings, leading to longer durability and a significant decrease in crack formation. Additionally, key intermediates like DMBA (CAS 10097-02-6) and DMPA (CAS 4767-03-7) are crucial for producing the waterborne polyurethane and polyester resins used in durable, low-VOC architectural and protective coatings, offering excellent adhesion and flexibility.',
        image:
          'https://images.pexels.com/photos/5691692/pexels-photo-5691692.jpeg?auto=compress&cs=tinysrgb&w=1200',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'Efficient Formwork Release (Demoulding)',
        challengeLink: 'formwork-release',
        challenge:
          'Ensuring clean and easy release of concrete from formwork without damaging the forms or the concrete surface, while maintaining worker safety and environmental considerations.',
        solution:
          'VUPOFORM acts as a highly effective deforming (release) agent for all types of building forms. Its insolubility in water provides an excellent separation effect, allowing for multiple reuses of the form without reapplication. It does not attack sealing materials or corrode metal equipment. VUPOFORM offers significant safety and environmental benefits: negligible volatility (no air pollution), elimination of oil contamination in wastewater, and no special safety measures required for handling.',
        image:
          'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1200',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
      {
        title: 'High-Performance Construction Adhesives & Sealants',
        challengeLink: 'construction-adhesives-sealants',
        challenge:
          'Modern construction relies on high-performance adhesives and sealants for bonding diverse materials, ensuring structural integrity, and providing effective sealing against environmental elements.',
        solution:
          'We supply key chemical intermediates like DMBA (CAS 10097-02-6), used in waterborne polyurethane, epoxy, and polyester adhesives where it enhances bonding strength and water resistance. Hydroxypivalic Acid (HPVA, CAS 4835-90-9), via its derivative HPN, contributes to the performance of adhesives and sealants by balancing hardness, flexibility, and adhesion, potentially enabling low-VOC formulations.',
        image:
          'https://images.pexels.com/photos/5691644/pexels-photo-5691644.jpeg?auto=compress&cs=tinysrgb&w=1200',
        relatedProducts: ['dmpa', 'dmba', 'hpva'],
        relatedServices: [],
        caseStudies: [],
      },
    ],
    keyProducts: ['dmpa', 'dmba', 'hpva'],
  },
}

interface ProductItem {
  name: string
  href: string
}

interface ApplicationItem {
  name: string
  href: string
}

interface FeaturedProduct {
  title: string
  description: string
  href: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  products: ProductItem[]
  applications: ApplicationItem[]
}

interface Industry {
  title: string
  description: string
  href: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  badgeText?: string
  applicationsCompact: string[]
}

interface ServiceCategory {
  title: string
  description: string
  href: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  features?: string[]
}

const navItems = [
  { name: 'About', href: '/about-us' },
  {
    name: 'Products',
    href: '/products',
    hasDropdown: true,
  },
  {
    name: 'Industries',
    href: '/industries',
    hasDropdown: true,
  },
  {
    name: 'Services',
    href: '/services',
    hasDropdown: true,
  },
  { name: 'Sustainability', href: '/sustainability' },
  { name: 'News', href: '/news' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '/contact' },
]

const featuredProducts: FeaturedProduct[] = [
  {
    title: 'Hydroxy Acids',
    description: 'Specialized functional acids for polymer applications',
    href: '/products/hydroxy-acids',
    icon: FlaskConical,
    products: [
      { name: 'Dimethylolpropionic Acid (DMPA)', href: '/products/dmpa' },
      { name: 'Dimethylolbutyric Acid (DMBA)', href: '/products/dmba' },
      { name: '3-Hydroxypivalic Acid (HPVA)', href: '/products/hpva' },
    ],
    applications: [
      { name: 'Waterborne Coatings', href: '/applications/waterborne-coatings' },
      { name: 'Polyurethane Dispersions', href: '/applications/polyurethane-dispersions' },
    ],
  },
  {
    title: 'Specialty Hindered Amines',
    description:
      'Advanced HALS stabilizers, TEMPO derivatives, and specialized intermediates for research and synthesis',
    href: '/products/specialty-hindered-amines',
    icon: FlaskConical,
    products: [
      {
        name: 'HALS Stabilizers (Tinuvin Types)',
        href: '/products/specialty-hindered-amines/hals-stabilizers',
      },
      {
        name: '1,2,2,6,6-Pentamethylpiperidine (CAS 79-55-0)',
        href: '/products/specialty-hindered-amines/pentamethylpiperidine',
      },
      {
        name: '4-Amino-TEMPO (CAS 14691-88-4)',
        href: '/products/specialty-hindered-amines/amino-tempo',
      },
    ],
    applications: [
      { name: 'Polymer Stabilization', href: '/applications/polymer-stabilization' },
      { name: 'Spin Labeling Research', href: '/applications/spin-labeling' },
    ],
  },
  {
    title: 'Polymerisation Inhibitors',
    description:
      'Advanced H-TEMPO based solutions for preventing unwanted polymerisation in industrial processes',
    href: '/products/polymerisation-inhibitors',
    icon: Beaker,
    products: [
      {
        name: 'VUPIN H37-B (H-TEMPO Based)',
        href: '/products/polymerisation-inhibitors/vupin-h37b',
      },
      {
        name: 'FCC Gasoline Stabilizers',
        href: '/products/polymerisation-inhibitors/fcc-stabilizers',
      },
      {
        name: 'Monomer Storage Solutions',
        href: '/products/polymerisation-inhibitors/monomer-storage',
      },
    ],
    applications: [
      { name: 'Refinery Operations', href: '/applications/refinery-operations' },
      { name: 'Monomer Processing', href: '/applications/monomer-processing' },
    ],
  },
  {
    title: 'Glycol Ethers',
    description: 'Versatile oxygenated solvents and coupling agents for industrial applications',
    href: '/products/glycol-ethers',
    icon: Factory,
    products: [
      { name: '2-Butoxyethanol (CAS 111-76-2)', href: '/products/glycol-ethers/2-butoxyethanol' },
      { name: 'VUPIN H37-B', href: '/products/glycol-ethers/vupin-h37b' },
      { name: 'E-Series Glycol Ethers', href: '/products/glycol-ethers/e-series' },
    ],
    applications: [
      { name: 'Coatings & Paints', href: '/applications/coatings-paints' },
      { name: 'Industrial Cleaning', href: '/applications/industrial-cleaning' },
    ],
  },

  {
    title: 'Phospholipid Precursors',
    description:
      'High-purity biochemical building blocks for cell membrane synthesis and cellular health',
    href: '/products/phospholipid-precursors',
    icon: Microscope,
    products: [
      {
        name: 'Colamin Phosphate (CAS 1071-23-4)',
        href: '/products/phospholipid-precursors/colamin-phosphate',
      },
      {
        name: 'Colamin Phosphate Sodium Salt',
        href: '/products/phospholipid-precursors/sodium-salt',
      },
      {
        name: 'Colamin Phosphate Calcium Salt',
        href: '/products/phospholipid-precursors/calcium-salt',
      },
    ],
    applications: [
      { name: 'Dietary Supplements', href: '/applications/dietary-supplements' },
      { name: 'Veterinary Nutrition', href: '/applications/veterinary-nutrition' },
    ],
  },
  {
    title: 'Hindered Amines',
    description: 'Specialized nitroxyl compounds for various applications',
    href: '/products/hindered-amines',
    icon: Atom,
    products: [
      { name: '2,2,6,6-Tetramethylpiperidine (TEMP)', href: '/products/hindered-amines/temp' },
      {
        name: 'TEMPO (2,2,6,6-Tetramethylpiperidin-1-oxyl)',
        href: '/products/hindered-amines/tempo',
      },
      { name: '4-Hydroxy-TEMPO (TEMPOL / H-TEMPO)', href: '/products/hindered-amines/tempol' },
    ],
    applications: [
      { name: 'Polymer Light Stabilization', href: '/applications/polymer-stabilization' },
      { name: 'Selective Oxidation', href: '/applications/selective-oxidation' },
    ],
  },
]

const industryCategories: Industry[] = [
  {
    title: 'Coatings, Paints & Inks',
    description: 'Essential building blocks for high-performance, low VOC coating formulations',
    href: '/industries/coatings-paints-inks',
    icon: Paintbrush,
    badgeText: 'Low VOC',
    applicationsCompact: ['Low VOC', 'Innovative'],
  },
  {
    title: 'Polymers & Plastics',
    description: 'Key components for advanced polymer performance and durability',
    href: '/industries/polymers-plastics',
    icon: Box,
    badgeText: 'Innovative',
    applicationsCompact: ['Innovative'],
  },
  {
    title: 'Adhesives & Sealants',
    description: 'Specialized building blocks for high-performance bonding solutions',
    href: '/industries/adhesives-sealants',
    icon: SprayCan,
    badgeText: 'High Performance',
    applicationsCompact: ['High Performance'],
  },
  {
    title: 'Pharmaceuticals & Biotechnology',
    description: 'High-purity intermediates and materials for medical applications',
    href: '/industries/pharmaceuticals',
    icon: FlaskConical,
    badgeText: 'GMP',
    applicationsCompact: ['GMP'],
  },
  {
    title: 'Petrochemicals & Refineries',
    description: 'Specialized products and expertise for petrochemical processes',
    href: '/industries/petrochemicals-refineries',
    icon: Factory,
    badgeText: 'ISO 9001',
    applicationsCompact: ['ISO 9001'],
  },
  {
    title: 'Automotive',
    description: 'Materials for superior performance coatings and adhesives',
    href: '/industries/automotive',
    icon: CarFront,
    badgeText: 'Low VOC',
    applicationsCompact: ['Low VOC'],
  },
]

const serviceCategories: ServiceCategory[] = [
  {
    title: 'Analytical Services (ATBEL Division)',
    description:
      'Comprehensive analytical testing and characterization services for chemical compounds and materials',
    href: '/services/analytical-testing',
    icon: Microscope,
    features: [
      'Accredited testing (SNAS S-118)',
      'Chromatography (GC, HPLC, GC-MS)',
      'Spectroscopy (FT-IR, NMR, UV/Vis)',
    ],
  },
  {
    title: 'Custom Synthesis & Manufacturing',
    description:
      'Tailored synthesis solutions from lab to commercial scale with strict quality control',
    href: '/services/custom-synthesis-manufacturing',
    icon: Beaker,
    features: [
      'Complex molecule synthesis (g to kg scale)',
      'Process development & optimization',
      'Pilot-scale manufacturing (up to 250 t/yr)',
    ],
  },
  {
    title: 'Regulatory & Technical Support',
    description: 'Expert guidance on chemical regulations, documentation, and compliance',
    href: '/services/regulatory-technical-support',
    icon: ClipboardCheck,
    features: [
      'REACH registration & compliance',
      'ISO 9001 & Responsible Care expertise',
      'Technical problem-solving consultation',
    ],
  },
  {
    title: 'Cosmetics Custom Manufacturing',
    description: 'Specialized manufacturing services for cosmetic ingredients and formulations',
    href: '/services/cosmetics-custom-manufacturing',
    icon: Sparkles,
    features: [
      'White & private label cosmetics',
      'Hand creams & massage gels',
      'Medical/diagnostic gels',
    ],
  },
  {
    title: 'Research & Development',
    description: 'Collaborative R&D services to develop innovative chemical solutions',
    href: '/services/research-development',
    icon: Lightbulb,
    features: [
      'Route scouting & feasibility studies',
      'Custom synthesis (g to kg scale)',
      'Process development & optimization',
    ],
  },
]

const languages = [
  { code: 'EN', name: 'English' },
  { code: 'SK', name: 'Slovak' },
  { code: 'JPN', name: 'Japanese' },
]

const MAIN_INDUSTRIES = [
  'automotive',
  'coatingsPaintsInks',
  'polymersPlastics',
  'adhesivesSealants',
  'pharmaceuticals',
  'petrochemicalsRefineries',
] as const

type IndustrySlug = (typeof MAIN_INDUSTRIES)[number]

function IndustriesMegaMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="container mx-auto py-6 px-6">
      <div className="grid grid-cols-3 gap-6">
        {MAIN_INDUSTRIES.map((slug: IndustrySlug) => {
          const industry = industries[slug]
          return (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group relative overflow-hidden rounded-lg border border-gray-100 aspect-[16/7]"
              onClick={onClose}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transform group-hover:scale-[1.01] transition-transform duration-300"
                style={{ backgroundImage: `url(${industry.featuredImage})` }}
              />

              {/* Overlay - Enhanced on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20 opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Content Container - Animate position */}
              <div className="absolute inset-x-0 bottom-0 transition-transform duration-300 ease-out group-hover:-translate-y-2">
                {/* Main Content */}
                <div className="p-2.5">
                  <h3 className="text-md font-secondary font-medium text-white group-hover:text-blue-300 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-gray-300 line-clamp-2 opacity-85">
                    {industry.description}
                  </p>
                </div>

                {/* Applications badges - Hidden by default, shown on hover */}
                <div className="h-0 overflow-hidden transition-all duration-300 ease-out group-hover:h-[60px] px-2.5 pb-2.5">
                  <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-[50ms] z-10">
                    {industry.challenges.slice(0, 2).map((challenge: any, index: number) => (
                      <Link
                        key={index}
                        href={`/industries/${industry.slug}#${challenge.challengeLink}`}
                        className="inline-flex text-[11px] px-2 py-0.5 bg-blue-500/20 hover:bg-blue-500/40 text-blue-300 duration-300 transition-colors rounded-full border border-blue-400/20"
                      >
                        {challenge.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
        <p className="text-sm text-gray-500">
          Explore how VUP chemistry solutions serve various industries
        </p>
        <Link
          href="/industries"
          className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center"
          onClick={onClose}
        >
          View all industries
          <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchDialogOpen(true)
      }
      if (e.key === 'Escape') {
        setIsSearchDialogOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  // Quick links for search dialog when no query is entered
  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: FileText },
    { name: 'Products', href: '/products', icon: FlaskConical },
    { name: 'Industries', href: '/industries', icon: Factory },
    { name: 'Research', href: '/research', icon: Atom },
    { name: 'Sustainability', href: '/sustainability', icon: Palette },
  ]

  // Filter search results based on query
  const getSearchResults = () => {
    if (!searchQuery.trim()) return []

    const allItems = [
      ...navItems.map((item) => ({
        name: item.name,
        href: item.href,
        type: 'Page',
      })),
      ...featuredProducts.map((product) => ({
        name: product.title,
        href: product.href,
        type: 'Product',
      })),
      ...industryCategories.map((industry) => ({
        name: industry.title,
        href: industry.href,
        type: 'Industry',
      })),
    ]

    return allItems.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white shadow-sm',
        isScrolled ? 'py-4' : 'py-6',
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <div className="flex items-center">
            <span className="font-primary font-bold text-3xl ">VUP</span>
            <span className="text-sm font-secondary ml-2 text-gray-600">Chemistry</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.name} className="relative group">
                <button
                  className="font-primary text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1"
                  onClick={() => toggleDropdown(item.name)}
                  onMouseEnter={() => setActiveDropdown(item.name)}
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={cn(
                      'transition-transform duration-200',
                      activeDropdown === item.name ? 'rotate-180' : '',
                    )}
                  />
                </button>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="font-primary text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ),
          )}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-5">
          {/* Search Dialog Trigger */}
          <Dialog open={isSearchDialogOpen} onOpenChange={setIsSearchDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-blue-600 h-10 w-10"
              >
                <Search size={22} />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px] p-0">
              <div className="flex flex-col h-[450px]">
                <div className="flex items-center border-b px-3">
                  <Search className="mr-2 h-4 w-4 shrink-0 text-gray-500" />
                  <Input
                    className="flex h-12 w-full ring-0 bg-transparent py-3 text-sm outline-none placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50 border-0 focus-visible:ring-0 focus:ring-0 focus:outline-none focus-visible:outline-none focus:border-0 focus-visible:border-0 shadow-none"
                    placeholder="Type a command or search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    style={{ boxShadow: 'none' }}
                  />
                  <div className="flex items-center gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-gray-500"
                      onClick={() => setIsSearchDialogOpen(false)}
                    >
                      <X size={12} />
                    </Button>
                  </div>
                </div>
                <ScrollArea className="flex-1 px-3 py-2">
                  {searchQuery.trim() === '' ? (
                    <div className="py-2">
                      <h4 className="mb-2 text-xs font-semibold text-gray-500">Links</h4>
                      <div className="space-y-1">
                        {quickLinks.map((link, index) => (
                          <Link
                            key={index}
                            href={link.href}
                            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => setIsSearchDialogOpen(false)}
                          >
                            <link.icon className="h-4 w-4 text-gray-500" />
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="py-2">
                      <h4 className="mb-2 text-xs font-semibold text-gray-500">Search Results</h4>
                      <div className="space-y-1">
                        {getSearchResults().length > 0 ? (
                          getSearchResults().map((result, index) => (
                            <Link
                              key={index}
                              href={result.href}
                              className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => setIsSearchDialogOpen(false)}
                            >
                              <span>{result.name}</span>
                              <span className="text-xs text-gray-500">{result.type}</span>
                            </Link>
                          ))
                        ) : (
                          <div className="px-3 py-6 text-center text-sm text-gray-500">
                            No results found for &quot;{searchQuery}&quot;
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </ScrollArea>
              </div>
            </DialogContent>
          </Dialog>

          {/* Language selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Select language">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code}>{lang.code}</DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-gray-700 hover:text-blue-600 h-10 w-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </Button>
        </div>
      </div>

      {/* Products Mega Menu */}
      <div
        className={cn(
          'absolute left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-20 hidden lg:block top-full overflow-hidden',
          activeDropdown === 'Products'
            ? 'animate-in fade-in duration-300 ease-out max-h-[800px] transition-[max-height,opacity,transform]'
            : 'animate-out fade-out duration-200 ease-in max-h-0 opacity-0 -translate-y-2 pointer-events-none',
        )}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto py-8 px-6">
          <div className="grid grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <Link
                key={index}
                href={product.href}
                className="group p-5 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
              >
                <div className="flex flex-col">
                  <div className="flex items-start gap-4">
                    <div className="text-blue-500 mt-1">
                      <product.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-secondary font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {product.title}
                      </h3>
                      <p className="mt-1 text-xs font-secondary text-gray-500 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Products */}
                  <div className="mt-3 ml-8">
                    <ul className="space-y-1">
                      {product.products.map((item, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-center">
                          <ArrowRight size={10} className="mr-1.5 text-blue-500" />
                          <Link
                            href={item.href}
                            className="hover:text-blue-600 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications as badges */}
                  <div className="mt-3 ml-8 flex flex-wrap gap-2">
                    {product.applications.map((app, idx) => (
                      <Link
                        key={idx}
                        href={app.href}
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs px-2 py-1 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                      >
                        {app.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
            <p className="text-sm text-gray-500">
              Discover our complete range of chemical products and solutions
            </p>
            <Link
              href="/products"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center"
            >
              View all products
              <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Industries Mega Menu */}
      <div
        className={cn(
          'absolute left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-20 hidden lg:block top-full overflow-hidden',
          activeDropdown === 'Industries'
            ? 'animate-in fade-in duration-300 ease-out max-h-[800px] transition-[max-height,opacity,transform]'
            : 'animate-out fade-out duration-200 ease-in max-h-0 opacity-0 -translate-y-2 pointer-events-none',
        )}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <IndustriesMegaMenu onClose={() => setActiveDropdown(null)} />
      </div>

      {/* Services Mega Menu */}
      {/* Services Mega Menu */}
      <div
        className={cn(
          'absolute left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-20 hidden lg:block top-full overflow-hidden',
          activeDropdown === 'Services'
            ? 'animate-in fade-in duration-300 ease-out max-h-[800px] transition-[max-height,opacity,transform]'
            : 'animate-out fade-out duration-200 ease-in max-h-0 opacity-0 -translate-y-2 pointer-events-none',
        )}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <div className="container mx-auto py-8 px-6">
          <div className="grid grid-cols-3 gap-6">
            {serviceCategories.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group p-5 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="text-blue-500 mt-1">
                    <service.icon size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-secondary font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-xs font-secondary text-gray-500 leading-relaxed">
                      {service.description}
                    </p>
                    {service.features && (
                      <ul className="mt-2 space-y-1">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-xs text-gray-600 flex items-center">
                            <Check size={10} className="mr-1.5 text-blue-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
            <p className="text-sm text-gray-500">
              Partner with us for end-to-end chemical solutions tailored to your business
            </p>
            <Link
              href="/services"
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors flex items-center"
            >
              View all services
              <ArrowRight size={14} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute inset-x-0 top-full bg-white shadow-lg animate-in fade-in duration-300 ease-out slide-in-from-top-1">
          <nav className="container mx-auto py-8 px-6 flex flex-col space-y-5">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      className="font-secondary text-xl py-3 border-b border-gray-100 text-gray-800 hover:text-blue-600 transition-colors w-full text-left flex items-center justify-between"
                      onClick={() => toggleDropdown(item.name)}
                    >
                      {item.name}
                      <ChevronDown
                        size={20}
                        className={cn(
                          'transition-transform duration-200',
                          activeDropdown === item.name ? 'rotate-180' : '',
                        )}
                      />
                    </button>

                    {activeDropdown === 'Products' && item.name === 'Products' && (
                      <div className="pl-4 mt-3 space-y-4">
                        {featuredProducts.map((product, index) => (
                          <Link
                            key={index}
                            href={product.href}
                            className="block py-2 px-3 border border-gray-100 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center gap-2">
                              <product.icon size={16} className="text-blue-500" />
                              <span className="font-medium">{product.title}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{product.description}</p>
                            <div className="mt-2">
                              <ul className="text-xs text-gray-600 space-y-1">
                                {product.products.map((item, idx) => (
                                  <li key={idx} className="flex items-center">
                                    <ArrowRight size={8} className="mr-1 text-blue-500" />
                                    <Link
                                      href={item.href}
                                      className="hover:text-blue-600 transition-colors"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-2 flex flex-wrap gap-1">
                              {product.applications.map((app, idx) => (
                                <Link
                                  key={idx}
                                  href={app.href}
                                  onClick={(e) => e.stopPropagation()}
                                  className="text-xs px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors"
                                >
                                  {app.name}
                                </Link>
                              ))}
                            </div>
                          </Link>
                        ))}
                        <Link
                          href="/products"
                          className="py-2 text-blue-600 hover:text-blue-700 transition-colors font-medium flex items-center"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View all products
                          <ArrowRight size={12} className="ml-1" />
                        </Link>
                      </div>
                    )}

                    {activeDropdown === 'Industries' && item.name === 'Industries' && (
                      <div className="pl-4 mt-3 space-y-3">
                        {MAIN_INDUSTRIES.map((slug: IndustrySlug) => {
                          const industry = industries[slug]
                          return (
                            <Link
                              key={industry.slug}
                              href={`/industries/${industry.slug}`}
                              className="block py-2 px-3 border border-gray-100 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              <div className="flex items-center gap-2">
                                <div
                                  className="w-12 h-8 rounded bg-cover bg-center flex-shrink-0"
                                  style={{
                                    backgroundImage: `url(${industry.featuredImage})`,
                                  }}
                                />
                                <span className="font-medium">{industry.name}</span>
                              </div>
                              <p className="text-xs text-gray-500 mt-1">{industry.description}</p>
                            </Link>
                          )
                        })}
                        <Link
                          href="/industries"
                          className="py-2 text-blue-600 hover:text-blue-700 transition-colors font-medium flex items-center"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View all industries
                          <ArrowRight size={12} className="ml-1" />
                        </Link>
                      </div>
                    )}

                    {activeDropdown === 'Services' && item.name === 'Services' && (
                      <div className="pl-4 mt-3 space-y-4">
                        {serviceCategories.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="block py-2 px-3 border border-gray-100 rounded-md text-gray-700 hover:text-blue-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="flex items-center gap-2">
                              <service.icon size={16} className="text-blue-500" />
                              <span className="font-medium">{service.title}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                            {service.features && (
                              <div className="mt-2 grid grid-cols-2 gap-x-2 gap-y-1">
                                {service.features.map((feature, idx) => (
                                  <div
                                    key={idx}
                                    className="text-xs text-gray-600 flex items-center"
                                  >
                                    <ArrowRight
                                      size={8}
                                      className="mr-1 text-blue-500 flex-shrink-0"
                                    />
                                    <span className="truncate">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="py-2 text-blue-600 hover:text-blue-700 transition-colors font-medium flex items-center"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          View all services
                          <ArrowRight size={12} className="ml-1" />
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="font-secondary text-xl py-3 border-b border-gray-100 text-gray-800 hover:text-blue-600 transition-colors block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
