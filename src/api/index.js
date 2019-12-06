import ProjectIcon from '../assets/Projects.jpg'
import PageIcon from '../assets/Pages.svg'
import PageWhite from '../assets/Pages-White.svg'

export const projects = [
    { id: 0, icon: ProjectIcon, url: '/home' },
    { id: 1, icon: ProjectIcon, url: '/news' }
]

export const pages = [
    { id: 0, page: 'Overview', icon: PageIcon, iconActive: PageWhite, to: '/home' },
    { id: 1, page: 'News', icon: PageIcon, iconActive: PageWhite, to: '/news' },
    { id: 2, page: 'Calendar', icon: PageIcon, iconActive: PageWhite, to: '/calendar' },
    { id: 3, page: 'Chat', icon: PageIcon, iconActive: PageWhite, to: '/chat' },
    { id: 4, page: 'Amenities', icon: PageIcon, iconActive: PageWhite, to: '/amenities' },
    { id: 5, page: 'Marketplace', icon: PageIcon, iconActive: PageWhite, to: '/marketplace' }
]