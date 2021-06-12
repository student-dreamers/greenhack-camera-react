import screw1 from './screw1.jpg'
import screw2 from './screw2.jpg'
import screw3 from './screw3.webp'

const mockItems = [
    {
        image: screw1,
        title: 'Screw M4 10mm',
        stock: {
            'Praha - Zlicin': 100,
            'Praha - Cerny Most': 85,
        },
        tags: ['SCREW']
    },
    {
        image: screw2,
        title: 'Screw M10 10mm',
        stock: {
            'Praha - Zlicin': 0,
            'Praha - Cerny Most': 200,
        },
        tags: ['SCREW']
    },
    {
        image: screw3,
        title: 'Screw M6 10mm',
        stock: {
            'Praha - Zlicin': 30,
            'Praha - Cerny Most': 70,
        },
        tags: ['SCREW']
    },
]

export default mockItems
