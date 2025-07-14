// Project data structure
const projectsData = [
    {
        name: "Exploration des merveilles de la tribu Pende",
        id: "project_01",
        date: "Janvier 2025",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",
        images: [
            {
                id: "project_01_img_01",
                link: "./Project_01/project_01_img_01.png",
                title: "Tribu pende",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",

            },
            {
                id: "project_01_img_02",
                link: "./Project_01/project_01_img_02.png",
                title: "Tribu pende",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",
            },
            {
                id: "project_01_img_03",
                link: "./Project_01/project_01_img_03.png",
                title: "Tribu pende",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",
            },
            {
                id: "project_01_img_04",
                link: "./Project_01/project_01_img_04.png",
                title: "Masque Tundu",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",
            }
        ]
    },
    {
        name: "la beauté de la danse Africaine",
        id: "project_02",
        date: "April 2023",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",
        images: [
            {
                id: "project_02_img_01",
                link: "./Project_02/project_02_img_01.png",
                title: "Danse afro",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",
            },
            {
                id: "project_02_img_02",
                link: "./Project_02/project_02_img_02.png",
                title: "Danse afro",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",
            },
            {
                id: "project_02_img_03",
                link: "./Project_02/project_02_img_03.png",
                title: "Danse afro",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",
            }
        ]
    },
    /*{
        name: "Capturing the essence and emotions of people",
        id: "project_03",
        date: "March 2023",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",
        images: [
            {
                id: "project_03_img_01",
                link: "./Project_03/project_03_img_01.png",
                title: "Young woman portrait",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",
            },
            {
                id: "project_03_img_02",
                link: "./Project_03/project_03_img_02.png",
                title: "Man with intense gaze",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",
            },
            {
                id: "project_03_img_03",
                link: "./Project_03/project_03_img_03.png",
                title: "Smiling young man",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",
            }
        ]
    }*/
];

// Client testimonials data
const clientsData = [
    {
        id: "client_01",
        name: "Sarah Johnson",
        image: "clients_img/client_img_01.jpg",
        testimonial: "Working with Belonne was an absolute pleasure. They captured moments I didn't even realize were happening. The photos are stunning and I will cherish them forever."
    },
    {
        id: "client_02",
        name: "Michael Chen",
        image: "clients_img/client_img_02.jpg",
        testimonial: "I was initially nervous about my photoshoot, but Belonne made me feel comfortable right away. Their artistic vision and attention to detail resulted in photos that exceeded my expectations."
    },
    {
        id: "client_03",
        name: "Elena Rodriguez",
        image: "clients_img/client_img_03.jpg",
        testimonial: "The way Belonne captured the essence of our family is truly remarkable. They have a gift for finding beauty in natural moments, and the result is a collection of photos that tell our story perfectly."
    }
];

// Homepage gallery
function loadHomeGallery() {
    const gallery = document.getElementById('gallery');
    if (!gallery) return;

    // Collect all project images
    let allImages = [];
    projectsData.forEach(project => {
        project.images.forEach(image => {
            allImages.push(image);
        });
    });

    // Create gallery elements
    for (let i = 0; i < allImages.length; i++) {
        const image = allImages[i];
        const div = document.createElement('div');
        div.className = 'gallery-image';
        
        if (i === 0) div.classList.add('center');
        else if (i === 1) div.classList.add('right');
        else if (i === allImages.length - 1) div.classList.add('left');
        else div.style.display = 'none';

        const img = document.createElement('img');
        img.src = image.link;
        img.alt = image.title;

        div.appendChild(img);
        gallery.appendChild(div);
    }

    // Gallery navigation
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            rotateGallery('left');
        });
        
        nextBtn.addEventListener('click', () => {
            rotateGallery('right');
        });
    }
}

// Rotate gallery images
function rotateGallery(direction) {
    const images = document.querySelectorAll('.gallery-image');
    if (images.length < 3) return;

    let centerIndex, leftIndex, rightIndex;

    // Find current positions
    for (let i = 0; i < images.length; i++) {
        if (images[i].classList.contains('center')) centerIndex = i;
        else if (images[i].classList.contains('left')) leftIndex = i;
        else if (images[i].classList.contains('right')) rightIndex = i;
    }

    // Reset all images
    for (let i = 0; i < images.length; i++) {
        images[i].className = 'gallery-image';
        images[i].style.display = 'none';
    }

    // Calculate new positions
    if (direction === 'left') {
        // Previous image becomes center
        const newCenterIndex = (leftIndex === 0) ? images.length - 1 : leftIndex;
        const newLeftIndex = (newCenterIndex === 0) ? images.length - 1 : newCenterIndex - 1;
        const newRightIndex = centerIndex;

        images[newCenterIndex].classList.add('center');
        images[newLeftIndex].classList.add('left');
        images[newRightIndex].classList.add('right');
    } else {
        // Next image becomes center
        const newCenterIndex = (rightIndex === images.length - 1) ? 0 : rightIndex;
        const newRightIndex = (newCenterIndex === images.length - 1) ? 0 : newCenterIndex + 1;
        const newLeftIndex = centerIndex;

        images[newCenterIndex].classList.add('center');
        images[newLeftIndex].classList.add('left');
        images[newRightIndex].classList.add('right');
    }

    // Show new positions
    document.querySelector('.gallery-image.center').style.display = 'block';
    document.querySelector('.gallery-image.left').style.display = 'block';
    document.querySelector('.gallery-image.right').style.display = 'block';
}

// Load project cards on the projects page
function loadProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        // Use the first image as the card thumbnail
        const thumbnailImage = project.images[0];
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${thumbnailImage.link}" alt="${project.name}">
            </div>
            <div class="project-info">
                <h3>${project.name}</h3>
                <div class="project-date">${project.date}</div>
                <a href="project-detail.html?id=${project.id}" class="btn">View Project</a>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Load project details
function loadProjectDetail() {
    const projectDetailContainer = document.getElementById('project-detail-container');
    if (!projectDetailContainer) return;

    // Get project ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    if (!projectId) {
        projectDetailContainer.innerHTML = '<p>Project not found</p>';
        return;
    }
    
    // Find project by ID
    const project = projectsData.find(p => p.id === projectId);
    
    if (!project) {
        projectDetailContainer.innerHTML = '<p>Project not found</p>';
        return;
    }
    
    // Create project header
    const projectHeader = document.createElement('div');
    projectHeader.className = 'project-detail-header';
    projectHeader.innerHTML = `
        <h1>${project.name}</h1>
        <p class="project-date">${project.date}</p>
        <p>${project.description}</p>
    `;
    
    // Create project gallery
    const projectGallery = document.createElement('div');
    projectGallery.className = 'project-detail-gallery';
    
    project.images.forEach(image => {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'project-detail-image';
        imageContainer.innerHTML = `
            <img src="${image.link}" alt="${image.title}" data-id="${image.id}">
            <div class="image-overlay">${image.title}</div>
        `;
        
        // Add click event for lightbox
        imageContainer.addEventListener('click', function() {
            openLightbox(image.link, image.title, image.description);
        });
        
        projectGallery.appendChild(imageContainer);
    });
    
    // Clear container and add elements
    projectDetailContainer.innerHTML = '';
    projectDetailContainer.appendChild(projectHeader);
    projectDetailContainer.appendChild(projectGallery);
}

// Open lightbox
function openLightbox(src, caption, description) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxDescription = document.getElementById('lightbox-description');
    
    lightboxImage.src = src;
    lightboxCaption.textContent = caption;
    lightboxDescription.textContent = description;
    lightbox.style.display = 'flex';
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// Client testimonial modal
function setupClientModal() {
    const clientLinks = document.querySelectorAll('.client-detail');
    const modal = document.getElementById('testimonialModal');
    const closeBtn = document.querySelector('.close-modal');
    const modalImage = document.getElementById('modalClientImage');
    const modalName = document.getElementById('modalClientName');
    const modalTestimonial = document.getElementById('modalClientTestimonial');
    
    if (!modal) return;
    
    clientLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const clientId = this.dataset.client;
            const client = clientsData.find(c => c.id === clientId);
            
            if (client) {
                modalImage.src = client.image;
                modalName.textContent = client.name;
                modalTestimonial.textContent = client.testimonial;
                modal.style.display = 'block';
            }
        });
    });
    
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Handle form submission
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For demo purposes, just show a success message
        const formStatus = document.getElementById('form-status');
        if (formStatus) {
            formStatus.textContent = 'Message sent successfully!';
            formStatus.style.color = '#6cbab5';
            contactForm.reset();
        }
    });
}

// Dark/light mode detection
function setupColorScheme() {
    if (window.matchMedia) {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const handleColorSchemeChange = (e) => {
            if (e.matches) {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
            } else {
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
            }
        };
        
        // Set initial value
        handleColorSchemeChange(darkModeMediaQuery);
        
        // Listen for changes
        darkModeMediaQuery.addEventListener('change', handleColorSchemeChange);
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Run common setup
    setupColorScheme();
    setupClientModal();
    
    // Run page-specific setup
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || currentPage === '') {
        loadHomeGallery();
    } else if (currentPage === 'project.html') {
        loadProjects();
    } else if (currentPage === 'project-detail.html') {
        loadProjectDetail();
    } else if (currentPage === 'contact.html') {
        setupContactForm();
    }
});
