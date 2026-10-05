# Regenerate committed assets: python scripts/generate-brand-assets.py /path/to/Inter-Latin.ttf
from PIL import Image,ImageDraw,ImageFont
from pathlib import Path
import sys
src=Image.open('public/images/adex-profile-original.jpg').convert('RGB')
# Keep the full head and shoulders in the visible portrait, inside the source border.
portrait=src.crop((42,42,982,982));portrait.resize((800,800),Image.Resampling.LANCZOS).save('public/images/adex-profile.webp',quality=90)
Path('public/icons').mkdir(exist_ok=True)
face=src.crop((252,65,782,595)).convert('RGBA')
mask=Image.new('L',face.size);ImageDraw.Draw(mask).ellipse((0,0,529,529),fill=255);face.putalpha(mask)
for n in [16,32,48,192,512]:face.resize((n,n),Image.Resampling.LANCZOS).save(f'public/icons/favicon-{n}.png')
face.resize((180,180),Image.Resampling.LANCZOS).save('public/icons/apple-touch-icon.png')
face.resize((256,256),Image.Resampling.LANCZOS).save('public/favicon.ico',sizes=[(16,16),(32,32),(48,48),(64,64)])
im=Image.new('RGB',(1200,630),'white');d=ImageDraw.Draw(im)
def font(n):return ImageFont.truetype(sys.argv[1],n)
d.rectangle((0,0,14,630),fill='#147D52');d.text((76,142),'Adex',font=font(100),fill='#0B3D2E');d.text((81,280),'Shopify Store Expert',font=font(40),fill='#147D52');d.text((81,378),'Build. Redesign. Improve your store.',font=font(25),fill='#5D6661');d.text((81,507),'adex.com.ng',font=font(24),fill='#0B3D2E')
pic=portrait.resize((410,410),Image.Resampling.LANCZOS).convert('RGBA');m=Image.new('L',(410,410));ImageDraw.Draw(m).ellipse((0,0,409,409),fill=255);pic.putalpha(m);im.paste(pic,(730,110),pic);im.save('public/images/adex-social-preview.png',optimize=True)
