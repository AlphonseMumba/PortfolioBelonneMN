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
                link: "Project_01/project_01_img_01.png",
                title: "Mungaji",
                description: "L’image incarne la mémoire ancestrale, une école visuelle où chaque motif, chaque texture, devient une leçon d’histoire, de savoir et d’appartenance. En tant que photographe, je vois dans cette image une résonance profonde — un espace de dialogue entre passé et présent, tradition et création, vécu et reconquête identitaire. ",
            },
            {
                id: "project_01_img_02",
                link: "Project_01/project_01_img_02.png",
                title: "Tundu",
                description: " cette image engage une réflexion sur les rôles que nous jouons dans nos vies. Le masque, bien que protecteur et symbolique, révèle également les multiples facettes de l'identité humaine. Chaque individu, parfois voilé par les attentes sociales, fait face à la quête de sa véritable essence, oscillant entre ce qu'il montre et ce qu'il dissimule. Cette composition évoque un dialogue invitant à explorer les thèmes de l'identité, de la tradition et de la nature, rappelant que chaque personne porte en elle une histoire, une culture, et un profond lien avec le monde qui l’entoure."
            },
            {
                id: "project_01_img_03",
                link: "Project_01/project_01_img_03.png",
                title: "Mungaji",
                description: "L’image incarne la mémoire ancestrale, une école visuelle où chaque motif, chaque texture, devient une leçon d’histoire, de savoir et d’appartenance. En tant que photographe, je vois dans cette image une résonance profonde — un espace de dialogue entre passé et présent, tradition et création, vécu et reconquête identitaire. ",
            },
            {
                id: "project_01_img_04",
                link: "./Project_01/project_01_img_04.png",
                title: "Masque Tundu",
                description: " Cette image incarne une profonde réflexion sur les rites de passage, la préservation des traditions culturelles, et la relation entre l'homme et la terre. Le contraste entre le visage masqué et l'environnement délabré soulève des questions sur l'identité cachée et la manière dont nous nous présentons au monde. cette représentation nous rappelle que derrière chaque masque se cache une histoire, une lutte pour l'identité et une quête de sens. Elle nous invite à explorer les couches de notre propre existence, à chercher ce que nous disons et ce que nous choisissons de cacher, tout en insistant sur l'importance de l'héritage culturel et spirituel qui traverse les générations.",
            },
            {
                id: "project_01_img_05",
                link: "Project_01/project_01_img_05.png",
                title: "Mungaji",
                description: "L’image incarne la mémoire ancestrale, une école visuelle où chaque motif, chaque texture, devient une leçon d’histoire, de savoir et d’appartenance. En tant que photographe, je vois dans cette image une résonance profonde — un espace de dialogue entre passé et présent, tradition et création, vécu et reconquête identitaire. ",
            },
            {
                id: "project_01_img_06",
                link: "Project_01/project_01_img_06.png",
                title: "Tenu Mungaji",
                description: "l'image invite à la contemplation de l'identité et de la transformation. Ces figures, à mi-chemin entre l'homme et l'esprit, rappellent que nous sommes tous en quête d'une essence sacrée, cherchant à fusionner notre humanité avec le monde naturel. Dans le dialogue entre l'ombre et la lumière, cette scène nous pousse à réfléchir sur nos propres masques et sur les vérités que nous cachons. Ainsi, cette image n'est pas seulement une représentation visuelle, mais un appel à l'exploration intérieure, une invitation à embrasser les mystères qui façonnent notre existence.",
            },
            {
                id: "project_01_img_07",
                link: "Project_01/project_01_img_07.png",
                title: "Tenu Mungaji",
                description: " image soulève des questions sur l’authenticité et le spectacle. En portant ce costume et en adoptant cette posture, l'individu représente non seulement un symbole culturel, mais également une exploration de l'identité propre à chacun. Cela nous rappelle que, derrière chaque masque et chaque costume, se cache une histoire d'appartenance et de quête de sens. L’ambiance somber et mystique de l'image incite à réfléchir sur la relation entre l’homme et la nature, ainsi qu’à l’impact de nos ancêtres sur notre compréhension actuelle de l’identité et de la spiritualité. Ce tableau vibrant fait écho à notre recherche incessante de connexion avec des forces plus grandes que nous"
            },
            {
                id: "project_01_img_08",
                link: "Project_01/project_01_img_08.png",
                title: "Tenu Mungaji",
                description: "image soulève des questions sur l’authenticité et le spectacle. En portant ce costume et en adoptant cette posture, l'individu représente non seulement un symbole culturel, mais également une exploration de l'identité propre à chacun. Cela nous rappelle que, derrière chaque masque et chaque costume, se cache une histoire d'appartenance et de quête de sens. L’ambiance somber et mystique de l'image incite à réfléchir sur la relation entre l’homme et la nature, ainsi qu’à l’impact de nos ancêtres sur notre compréhension actuelle de l’identité et de la spiritualité. Ce tableau vibrant fait écho à notre recherche incessante de connexion avec des forces plus grandes que nous. "
            },
            {
                id: "project_01_img_09",
                link: "Project_01/project_01_img_09.png",
                title: "Mungaji",
                description: "À travers cette œuvre, je souhaite exprimer que la tradition n’est pas un vestige figé, mais une école vivante, un espace où chaque génération apprend, adapte et transmet ses valeurs. La pratique rituelle devient alors une leçon d’être, une source d’identité qui façonne notre perception de nousmêmes. La texture de ce costume, la posture de la figure, sont autant d’éléments qui racontent cette transmission subtile, entre passé et présent, entre sacré et contemporain. "
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
                link: "Project_02/project_02_img_01.png",
                title: "Danse afro",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",
            },
            {
                id: "project_02_img_02",
                link: "Project_02/project_02_img_02.png",
                title: "Danse afro",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",
            },
            {
                id: "project_02_img_03",
                link: "Project_02/project_02_img_03.png",
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
                link: "Project_03/project_03_img_01.png",
                title: "Young woman portrait",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",
            },
            {
                id: "project_03_img_02",
                link: "Project_03/project_03_img_02.png",
                title: "Man with intense gaze",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic! Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aspernatur consequatur velit libero minima ducimus, nesciunt officiis, expedita eveniet voluptatem ullam, dolor beatae quod omnis quae explicabo eius enim. Hic!",
            },
            {
                id: "project_03_img_03",
                link: "Project_03/project_03_img_03.png",
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
        name: "John Doe",
        image: "clients_img/client_img_01.jpg",
        testimonial: "Collaborer avec Belonne a été une expérience exceptionnelle. Il a su immortaliser des moments que je n'avais même pas conscience de vivre. Les photos sont absolument magnifiques, et je les chérirai éternellement."
    },
    {
        id: "client_02",
        name: "Jane Doe",
        image: "clients_img/client_img_02.jpg",
        testimonial: "En tant que jeune mariée, j'étais initialement nerveuse à l'idée de ma séance photo, mais Belonne m'a mise à l'aise dès le début. Sa vision artistique et son attention aux détails ont donné lieu à des photos qui ont dépassé toutes mes attentes. Chaque image capture la magie de notre journée de mariage, et je les chérirai pour toujours."
    },
    {
        id: "client_03",
        name: "John Doe",
        image: "clients_img/client_img_03.jpg",
        testimonial: "La manière dont Belonne a capturé l'essence de notre famille est vraiment remarquable. Il a un don pour trouver la beauté dans les moments naturels, et le résultat est une collection de photos qui racontent parfaitement notre histoire."
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
                <a href="project-detail.html?id=${project.id}" class="btn">Clic Ici !</a>
                <button class="btn btn-download" onclick="downloadProject('${project.id}')"><i class="fas fa-download"></i>Download</button>
            </div>
        `;
        
        projectsContainer.appendChild(projectCard);
    });
}

// Download project as PDF in a robust and modern way
async function downloadProject(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // --- Title Page ---
    doc.setFontSize(24);
    doc.text(project.name.toUpperCase(), 20, 30);

    doc.setFontSize(12);
    doc.text(`Date: ${project.date}`, 20, 50);
    doc.text('Photographer: Belonne MITOMBE', 20, 60);

    // --- Description ---
    doc.setFontSize(14);
    doc.text('DESCRIPTION', 20, 80);
    doc.setFontSize(11);
    const splitDescription = doc.splitTextToSize(project.description, 170);
    doc.text(splitDescription, 20, 90);

    let yPosition = 110 + (splitDescription.length * 6);

    // --- Helper to load image as dataURL ---
    function loadImageAsDataURL(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = function() {
                try {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    const imgData = canvas.toDataURL('image/jpeg', 0.8);
                    resolve(imgData);
                } catch (err) {
                    reject(err);
                }
            };
            img.onerror = function(err) {
                reject(err);
            };
            img.src = url;
        });
    }

    // --- Add images with descriptions ---
    for (let i = 0; i < project.images.length; i++) {
        const image = project.images[i];

        // On new page if not enough room, or if not first image
        if (i > 0 || yPosition > 200) {
            doc.addPage();
            yPosition = 20;
        }

        // Try to load and add the image
        try {
            const imgData = await loadImageAsDataURL(image.link);
            doc.addImage(imgData, 'JPEG', 20, yPosition, 80, 60);

            doc.setFontSize(12);
            doc.text(`Image ${i + 1}:`, 110, yPosition + 10);
            doc.setFontSize(10);
            const splitDesc = doc.splitTextToSize(image.description, 80);
            doc.text(splitDesc, 110, yPosition + 20);

            yPosition += 80;
        } catch (error) {
            // If image fails, just add the description and error note
            doc.setFontSize(12);
            doc.text(`Image ${i + 1}: ${image.description}`, 20, yPosition);
            doc.setFontSize(10);
            doc.text('[Image could not be loaded]', 20, yPosition + 10);
            yPosition += 25;
        }
    }

    // --- Save the PDF at the end ---
    doc.save(`${project.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_project.pdf`);
}

// Alternative simpler download function (if jsPDF is not available)
function downloadProjectSimple(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if (!project) return;
    
    // Create HTML content
    let htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>${project.name}</title>
            <style>
                body { font-family: Arial, sans-serif; padding: 20px; background: #000; color: #fff; }
                .header { text-align: center; margin-bottom: 30px; }
                .project-title { font-size: 24px; margin-bottom: 10px; }
                .project-info { margin-bottom: 20px; }
                .image-section { margin-bottom: 40px; page-break-inside: avoid; }
                .image-container { text-align: center; margin-bottom: 15px; }
                .image-container img { max-width: 400px; height: auto; border: 2px solid #6cbab5; }
                .image-description { font-style: italic; margin-top: 10px; }
                @media print { body { background: #000; } }
            </style>
        </head>
        <body>
            <div class="header">
                <h1 class="project-title">${project.name.toUpperCase()}</h1>
                <p>Photographer: Belonne MITOMBE</p>
                <p>Date: ${project.date}</p>
            </div>
            
            <div class="project-info">
                <h2>Description</h2>
                <p>${project.description}</p>
            </div>
            
            <div class="images-section">
    `;
    
    project.images.forEach((image, index) => {
        htmlContent += `
            <div class="image-section">
                <div class="image-container">
                    <img src="${image.link}" alt="${image.description}">
                </div>
                <div class="image-description">
                    <strong>Image ${index + 1}:</strong> ${image.description}
                </div>
            </div>
        `;
    });
    
    htmlContent += `
            </div>
        </body>
        </html>
    `;
    
    // Create and download HTML file
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${project.name.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_project.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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

// Dark/light mode detection
function setupColorScheme() {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    const savedTheme = localStorage.getItem('theme');
    const isLight = savedTheme === 'light' || (!savedTheme && prefersLight);

    if (isLight) {
        document.documentElement.classList.add('light-theme');
    } else {
        document.documentElement.classList.remove('light-theme');
    }

    // Listen for system changes
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        if (e.matches) {
            document.documentElement.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.remove('light-theme');
            localStorage.setItem('theme', 'dark');
        }
    });
}

// Ajout du bouton toggle et gestion du thème
document.addEventListener('DOMContentLoaded', () => {
    setupColorScheme();

    const header = document.querySelector('header');
    if (header) {
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'theme-toggle-btn';
        toggleBtn.textContent = '🌓 sombre/clair';
        toggleBtn.className = 'btn';

        const nav = header.querySelector('nav');
        if (nav) {
            nav.insertAdjacentElement('afterend', toggleBtn);
        } else {
            header.prepend(toggleBtn);
        }

        toggleBtn.addEventListener('click', function () {
            document.documentElement.classList.toggle('light-theme');
            localStorage.setItem('theme',
                document.documentElement.classList.contains('light-theme') ? 'light' : 'dark'
            );
        });
    }

    setupClientModal();

    // Set current year in footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

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
