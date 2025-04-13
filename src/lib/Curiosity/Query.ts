import {Photo} from './Query.types.ts';

const apiKey = 'TPy7a8gJfoguTbKbR3xRc6qWxW8umHFE9iO4FOPh';

export const Cameras = {
  FHAZ: 'Front Hazard Avoidance Camera',
  RHAZ: 'Rear Hazard Avoidance Camera',
  MAST: 'Mast Camera',
  CHEMCAM: 'Chemistry and Camera Complex',
  MAHLI: 'Mars Hand Lens Imager',
  MARDI: 'Mars Descent Imager',
  NAVCAM: 'Navigation Camera',
};

export const QueryByDate = async (q: {date: Date; camera?: keyof typeof Cameras; page?: number}) => {
  const {date: d, camera = 'FHAZ', page = 0} = q;

  try {
    const req = await fetch(
      `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${d.getFullYear()}-${d.getMonth()}-${d.getDate()}&api_key=${apiKey}&camera=${camera.toLowerCase()}&page=${page}`,
    );

    return ((await req.json()) as {photos: Photo[]}).photos;
  } catch (e) {
    return [];
  }
};
