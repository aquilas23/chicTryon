// utils/promptBuilder.js

const buildFluxPrompt = ({ hair, length, thickness, color, accessory }) => `
Transform the hairstyle in the provided image while preserving the original face identity, expression, ethnicity, skin tone, lighting, and head shape. Do not change facial structure or background.

Apply the following hairstyle settings:
• Hair Style: ${hair}
• Hair Length: ${length}
• Hair Thickness: ${thickness}
• Hair Color: ${color}
• Accessories: ${accessory}

Requirements:
• Maintain realistic hair texture and natural blending at the hairline
• Ensure the hairstyle fits naturally to the head shape and orientation
• Preserve all fine facial details and avoid distortion
• Do not modify any facial features, clothing, or background
• Do not change the original artistic style of the input image
• If the image is animated or illustrated, preserve that style (do not convert to photorealistic)

Output: High resolution, clean detail, natural lighting, accurate color rendering, realistic depth, and strand-level accuracy.
`;

module.exports = { buildFluxPrompt };
