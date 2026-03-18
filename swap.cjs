const fs = require('fs');
const path = 'src/App.tsx';
let content = fs.readFileSync(path, 'utf8');

const testStart = content.indexOf('      {/* Testimonials */}');
const pricingStart = content.indexOf('      {/* Pricing Section */}');
const guaranteeStart = content.indexOf('      {/* Guarantee Section */}');

if (testStart !== -1 && pricingStart !== -1 && guaranteeStart !== -1) {
  const testimonials = content.substring(testStart, pricingStart);
  const pricing = content.substring(pricingStart, guaranteeStart);

  const newContent = content.substring(0, testStart) + pricing + testimonials + content.substring(guaranteeStart);
  fs.writeFileSync(path, newContent);
  console.log('Swapped successfully');
} else {
  console.log('Could not find sections');
}
