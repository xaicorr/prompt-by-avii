
// PROPERLY NAMED IMAGE PROMPT DATA
const images = [
    {
        id: 1,
        title: "Urban Crowd Motion Model",
        category: "Street Portrait",
        image: "images/image-1.png",
        prompt: `Cinematic color portrait of the person from the reference image, whether girl or boy, styled as a professional fashion model with a serious, confident expression and direct front-facing gaze toward the camera. Keep their identity and facial features recognizable. Wearing a clean, premium off-white linen shirt, standing completely still in the exact center of a moving crowd. The subject is perfectly front-facing with no head tilt or side angle, tack-sharp with crisp facial details, while the surrounding people move rapidly with natural motion blur. Vibrant but cinematic color grading, realistic skin tones, soft natural lighting, dramatic urban atmosphere, shallow depth of field, subtle film grain, high-end editorial photography, dynamic contrast, authentic street photography aesthetic. Vertical 4:5 aspect ratio.`
    },
    {
        id: 2,
        title: "Crimson Studio Editorial",
        category: "Fashion Portrait",
        image: "images/image-2.png",
        prompt: `A cinematic close-up portrait of a stylish young man with medium-length messy wavy black hair, light stubble with a neatly trimmed beard and mustache, wearing slim rectangular black sunglasses and a small silver hoop earring in his left ear. He has a warm confident smile showing white teeth. He is dressed in a black ribbed knit crew-neck sweater. The background is a deep crimson red studio backdrop with a dramatic red rim light illuminating the right side of his hair and shoulder, while soft warm key lighting highlights the front of his face. High-end fashion editorial photography, luxury magazine cover aesthetic, ultra-realistic skin texture, sharp focus, shallow depth of field, professional studio lighting, rich contrast, moody atmosphere, 85mm portrait lens, f/1.8, photorealistic, 8K, premium color grading, minimal composition.`
    },
    {
        id: 3,
        title: "Molten Silver Waves",
        category: "Surreal 3D",
        image: "images/image-3.png",
        prompt: `Large, flowing liquid chrome/silver metal formations with an ultra-polished mirror finish. The material looks like molten reflective silver, thick and fluid, frozen in dramatic motion. Create smooth, organic tendrils, ribbons, tubes, waves, loops, curls, and elongated streams that twist and bend naturally.

The silver liquid should have a perfectly smooth metallic surface, extremely high reflectivity, realistic mirror-like highlights, strong environmental reflections, and subtle distorted reflections across its curved surface. It should feel like heavy liquid metal, not plastic, glass, chrome pipes, or solid sculptures.

The formations should vary in thickness, with some massive flowing structures and some thin elegant tendrils. They should stretch, drip, merge, split, curl around surfaces, and pool naturally, creating an organic surreal-metal effect. Smooth rounded edges, realistic fluid tension, believable weight, and physically convincing reflections.

Key visual: hyper-realistic molten chrome / liquid silver, mirror-polished, seamless flowing shapes, sculptural but fluid, surreal yet physically believable, cinematic reflections, extremely detailed metallic surface.`
    },
    {
        id: 4,
        title: "Rainy Mountain G-Wagon",
        category: "Automotive",
        image: "images/image-4.png",
        prompt: `Create a photorealistic vertical 9:16 luxury lifestyle photograph matching the composition and mood of the reference image.

A young stylish man is standing beside a black Mercedes-Benz G-Class (G-Wagon) on a wet road during a gloomy, rainy mountain setting. Replace the Defender completely with a modern black G-Wagon, keeping the vehicle large and prominent on the left side of the frame. The G-Wagon should have its iconic boxy silhouette, upright windshield, squared body, distinctive round headlights, vertical grille, Mercedes-Benz emblem, realistic LED lighting, glossy black paint, and accurate premium proportions.

The man is positioned on the right side of the vehicle, casually leaning/standing beside it. He wears an all-black outfit: a black puffer jacket, black oversized T-shirt, loose black pants, white sneakers, black sunglasses, and styled dark hair. His pose is relaxed and confident, looking slightly toward the side rather than directly at the camera.

Environment: rainy mountain location, wet reflective asphalt, misty mountains in the background, subtle greenery, overcast grey sky, light rain falling, realistic water droplets on the G-Wagon.`
    },
    // {
    //     id: 5,
    //     title: "Monochrome Street Fashion",
    //     category: "Fashion Portrait",
    //     image: "images/image-5.png",
    //     prompt: `High-fashion street editorial portrait of a model wearing a minimalist black oversized trench coat, dramatic directional side lighting, muted dark tones, high contrast shadows, shallow depth of field, captured on a 35mm lens.`
    // },
    // {
    //     id: 6,
    //     title: "Neon Cyberpunk Alley",
    //     category: "Cinematic",
    //     image: "images/image-6.png",
    //     prompt: `Cinematic night shot in a rain-slicked futuristic alley, glowing violet and cyan neon lights reflecting off puddles, atmospheric fog, photorealistic texture, cinematic composition, shot on Anamorphic lens.`
    // },
    // {
    //     id: 7,
    //     title: "Glass Prism Reflections",
    //     category: "Surreal 3D",
    //     image: "images/image-7.png",
    //     prompt: `Abstract geometric glass prism sculpture, chromatic dispersion, light refractions splitting into vivid spectrums, deep purple gradient background, ultra-sharp optical reflections, 8K render.`
    // }
];

const gallery = document.getElementById("gallery");
const categoriesContainer = document.getElementById("categories");
const search = document.getElementById("search");
const noResults = document.getElementById("noResults");
const modal = document.getElementById("modal");
const toast = document.getElementById("toast");

let activeCategory = "All";

function createCategories() {
    const categories = ["All", ...new Set(images.map(item => item.category))];
    categoriesContainer.innerHTML = "";
    categories.forEach(category => {
        const button = document.createElement("button");
        button.className = "category-btn" + (category === "All" ? " active" : "");
        button.textContent = category;
        button.onclick = () => {
            activeCategory = category;
            document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            displayImages();
        };
        categoriesContainer.appendChild(button);
    });
}

function displayImages() {
    const searchText = search.value.toLowerCase().trim();
    gallery.innerHTML = "";

    const filtered = images.filter(item => {
        const categoryMatch = activeCategory === "All" || item.category === activeCategory;
        const searchMatch = item.title.toLowerCase().includes(searchText) ||
            item.category.toLowerCase().includes(searchText) ||
            item.prompt.toLowerCase().includes(searchText);
        return categoryMatch && searchMatch;
    });

    if (filtered.length === 0) {
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    filtered.forEach(item => {
        const card = document.createElement("article");
        card.className = "card";
        card.innerHTML = `
                    <div class="image-container">
                        <img src="${item.image}" alt="${item.title}" loading="lazy">
                    </div>
                    <div class="card-info">
                        <div>
                            <div class="card-category">${item.category}</div>
                            <div class="card-title">${item.title}</div>
                        </div>
                        <div class="buttons">
                            <button class="btn" onclick="openImage(${item.id})">View</button>
                            <button class="btn copy-btn" onclick="copyPrompt(${item.id})">Copy</button>
                        </div>
                    </div>
                `;
        gallery.appendChild(card);
    });
}

search.addEventListener("input", displayImages);

function copyPrompt(id) {
    const item = images.find(img => img.id === id);
    navigator.clipboard.writeText(item.prompt).then(() => {
        showToast();
    });
}

function openImage(id) {
    const item = images.find(img => img.id === id);
    document.getElementById("modalImage").src = item.image;
    document.getElementById("modalTitle").textContent = item.title;
    document.getElementById("modalCategory").textContent = item.category;
    document.getElementById("modalPrompt").textContent = item.prompt;
    modal.dataset.currentId = id;
    modal.classList.add("show");
}

document.getElementById("closeModal").onclick = () => modal.classList.remove("show");
modal.addEventListener("click", e => { if (e.target === modal) modal.classList.remove("show"); });
document.addEventListener("keydown", e => { if (e.key === "Escape") modal.classList.remove("show"); });

document.getElementById("modalCopy").onclick = () => {
    const id = Number(modal.dataset.currentId);
    copyPrompt(id);
};

function showToast() {
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 1500);
}

createCategories();
displayImages();
