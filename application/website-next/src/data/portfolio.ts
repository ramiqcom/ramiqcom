export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo: string;
  demo?: string;
};

export type Paper = {
  title: string;
  venue: string;
  year: number;
  doi: string;
};

export type Video = {
  title: string;
  id: string;
  year: number;
};

export const profile = {
  name: 'Ramadhan',
  role: 'Remote Sensing Data Scientist',
  company: { name: 'Space4Good', url: 'https://space4good.com' },
  location: 'Bennekom, Netherlands',
  summary:
    'I turn satellite imagery into maps and insights, with a focus on forest and agroforestry biomass, land cover, seagrass, and flood hazard.',
  about: [
    'I am a remote sensing data scientist at Space4Good, working on biomass estimation from satellite data. I studied Cartography and Remote Sensing at Universitas Gadjah Mada in Indonesia and now live in the Netherlands.',
    'I work with Python, Google Earth Engine, GDAL, deep learning, and modern web mapping tools. I share what I learn through open-source code, geospatial web applications, and tutorials on my YouTube channel.',
  ],
  skills: [
    'Remote sensing',
    'Google Earth Engine',
    'Python',
    'Deep learning',
    'GDAL',
    'TypeScript',
    'Next.js',
    'Biomass and carbon',
  ],
};

export const projects: Project[] = [
  {
    title: 'Indonesia Land Cover and Biomass',
    description:
      "An application to visualize and analyze Indonesia's land cover and aboveground biomass maps.",
    tags: ['Next.js', 'Earth Engine', 'Biomass'],
    repo: 'https://github.com/ramiqcom/indonesia-biomass',
    demo: 'https://indonesia-biomass.vercel.app/',
  },
  {
    title: 'World Land Cover Analysis',
    description: "An application to visualize and analyze the world's land cover map.",
    tags: ['Next.js', 'Earth Engine', 'Land cover'],
    repo: 'https://github.com/ramiqcom/landcover-analysis',
    demo: 'https://landcover-analysis.vercel.app/',
  },
  {
    title: 'World Population Explorer',
    description: "An application to visualize and analyze the world's population map.",
    tags: ['Next.js', 'Earth Engine', 'Population'],
    repo: 'https://github.com/ramiqcom/world-population',
    demo: 'https://world-population-coral.vercel.app/',
  },
  {
    title: 'Hansen Global Forest Change',
    description:
      'A web map of Hansen Global Forest Change data served from Cloud Optimized GeoTIFFs with a GDAL tile server.',
    tags: ['TypeScript', 'GDAL', 'COG'],
    repo: 'https://github.com/ramiqcom/hansen-global-forest-change',
  },
  {
    title: 'Land Cover Classification with U-Net',
    description: 'A deep learning notebook that classifies land cover from satellite imagery.',
    tags: ['Python', 'Deep learning', 'U-Net'],
    repo: 'https://github.com/ramiqcom/deep-learning-lc-unet',
  },
  {
    title: 'Forest Classification with GEDI',
    description: 'A notebook for forest classification with a U-Net model.',
    tags: ['Python', 'GEDI', 'Deep learning'],
    repo: 'https://github.com/ramiqcom/forest-classification-gedi',
  },
  {
    title: 'Oil Palm Mapping in Papua',
    description: 'Mapping oil palm plantations with Sentinel-1 RTC radar imagery in Python.',
    tags: ['Python', 'Sentinel-1', 'Radar'],
    repo: 'https://github.com/ramiqcom/oil-palm-papua',
  },
  {
    title: 'Remote Sensing with Python',
    description: 'A collection of scripts and notebooks for remote sensing analysis with Python.',
    tags: ['Python', 'Notebooks', 'Tutorials'],
    repo: 'https://github.com/ramiqcom/remote-sensing-python',
  },
];

export const papers: Paper[] = [
  {
    title:
      'Comparing Public and Commercial Satellites to Estimate Agroforestry Aboveground Biomass in Santa Paolina, Follonica',
    venue: 'Distributed Computing and Artificial Intelligence (Springer)',
    year: 2026,
    doi: '10.1007/978-3-032-05745-7_22',
  },
  {
    title:
      'Comparing Advantages and Disadvantages of Ground-Based Destructive Methods with Remote Sensing for Tree Biomass Estimation',
    venue: 'Distributed Computing and Artificial Intelligence (Springer)',
    year: 2026,
    doi: '10.1007/978-3-032-05745-7_24',
  },
  {
    title:
      'Tree Biomass Estimation in Agroforestry for Carbon Farming: A Comparative Analysis of Timing, Costs, and Methods',
    venue: 'Forests',
    year: 2025,
    doi: '10.3390/f16081287',
  },
  {
    title:
      'Mapping the dynamics of seagrass aboveground carbon stock in a developing coastal area: case study of Kuta Mandalika, Lombok Island, Indonesia',
    venue: 'Environmental Monitoring and Assessment',
    year: 2025,
    doi: '10.1007/s10661-025-14534-0',
  },
  {
    title:
      'Monitoring Mangrove Biomass and Carbon Stocks in the Brazilian Amazon: Insights from GEDI and Sentinel-2 for Conservation',
    venue: 'IGARSS 2025, IEEE International Geoscience and Remote Sensing Symposium',
    year: 2025,
    doi: '10.1109/igarss55030.2025.11243213',
  },
  {
    title:
      'The Use of High-Resolution Satellite Imagery and Artificial Intelligence for Above-Ground Biomass Modelling in the Mediterranean Region: A Review',
    venue: 'Distributed Computing and Artificial Intelligence (Springer)',
    year: 2025,
    doi: '10.1007/978-3-031-76459-2_36',
  },
  {
    title:
      'The development land utilization and cover of the Jambi district are examined and forecasted using Google Earth Engine and CNN1D',
    venue: 'Remote Sensing Applications: Society and Environment',
    year: 2024,
    doi: '10.1016/j.rsase.2024.101175',
  },
  {
    title: 'Relationship between circularity ratio and flood hazard of Java Island’s watershed',
    venue: 'Eighth Geoinformation Science Symposium 2023 (SPIE)',
    year: 2024,
    doi: '10.1117/12.3009342',
  },
  {
    title:
      'Sentinel-1-derived Multi-Temporal Flood Hazard of North and South Java: The Case of Bodri and Serayu Watershed',
    venue: '2023 8th Asia-Pacific Conference on Synthetic Aperture Radar (APSAR)',
    year: 2024,
    doi: '10.1109/apsar58496.2023.10388940',
  },
];

export const videos: Video[] = [
  { title: 'Mapping Oil Palm using Sentinel-1 RTC in Python', id: 'pTVAOVotWX8', year: 2025 },
  {
    title: 'Hansen Global Forest Change Web Map Tile Server with NodeJS, GDAL, and Cloud Optimized GeoTIFF',
    id: 'osOjnBXouto',
    year: 2025,
  },
  {
    title: 'Deep Learning Satellite Imagery Land Cover Classification with U-Net',
    id: 'AoDcVaJE-1s',
    year: 2024,
  },
  {
    title: 'Land Cover Classification Using Python, Remote Sensing Data, and Machine Learning',
    id: 'V6z9PQxFVDY',
    year: 2024,
  },
  {
    title: 'Generating 10-meter Land Surface Temperature with Sentinel-2, SRTM, and Landsat in Earth Engine',
    id: '3LOMNzBHmjs',
    year: 2024,
  },
  { title: 'Indonesia Land Cover and AGB Analysis Application', id: 'P5B5aQYLkD8', year: 2024 },
  {
    title: "Mapping Indonesia's Tropical Glacier Loss in Puncak Jaya using Google Earth Engine",
    id: 'mQY9xFboRYQ',
    year: 2024,
  },
  { title: 'Mapping Flood Hazard using Sentinel-1 in Google Earth Engine', id: 'IQPss3b3rgU', year: 2024 },
  {
    title: 'Modelling Mangrove Biomass 2019 - 2023 with GEDI Data using Google Earth Engine',
    id: 'xwaAoiWoHDw',
    year: 2024,
  },
];

export const links = {
  youtube: 'https://www.youtube.com/@ramiqcom',
  github: 'https://github.com/ramiqcom',
};

export const contacts = [
  { label: 'Email', href: 'mailto:ramiqcom@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ramiqcom' },
  { label: 'GitHub', href: 'https://github.com/ramiqcom' },
  { label: 'YouTube', href: 'https://www.youtube.com/@ramiqcom' },
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=TAZp-ggAAAAJ&hl=en' },
  { label: 'ORCID', href: 'https://orcid.org/0009-0006-9501-9071' },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Ramadhan_Ramadhan7' },
];

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Research', href: '#research' },
  { label: 'Videos', href: '#videos' },
  { label: 'Contact', href: '#contact' },
];
