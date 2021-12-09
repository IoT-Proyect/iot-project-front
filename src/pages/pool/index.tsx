import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import es from 'yup-es';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { Layout } from '@/components/Layout';
import { useMutation, useQuery } from '@apollo/client';
import { useAuth } from '@/lib/auth';
import { CREATE_POOL } from '@/lib/queries';

const inputs = [
  {
    name: 'name',
    label: 'Nombre',
    type: 'text',
    placeholder: 'Nombre',
    required: true,
  },
  {
    name: 'description',
    label: 'Descripcion',
    type: 'text',
    placeholder: 'Descripcion',
    required: false,
  },
  {
    name: 'location',
    label: 'Ubicacion',
    type: 'text',
    placeholder: 'Ubicacion',
    required: true,
  },
  {
    name: 'volumen',
    label: 'Volumen en M3',
    type: 'number',
    placeholder: 'Volumen',
    required: true,
    min: 1,
  },
  {
    name: 'image',
    label: 'Imagen',
    type: 'text',
    placeholder: 'Url de la imagen',
    required: false,
  },
  {
    name: 'sensorID',
    label: 'ID del sensor',
    type: 'text',
    placeholder: 'ID',
    required: true,
  },
];
yup.setLocale(es);
const schema = yup.object().shape({
  name: yup.string().required().min(4).required(),
  description: yup.string().min(8),
  location: yup.string().required().min(4),
  volumen: yup.number().required().min(1).required(),
  image: yup.string().url(),
  sensorID: yup.string().required().min(8).required(),
});

export default function Pool() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { user } = useAuth();

  const [CreatePool, { loading, error }] = useMutation(CREATE_POOL, {
    fetchPolicy: 'network-only',
  });

  const onSubmit = ({
    name,
    description,
    location,
    image,
    volumen,
    sensorID,
  }) => {
    try {
      CreatePool({
        variables: {
          owner: user.id,
          name,
          description,
          location,
          image,
          sensorID,
          volumen: +volumen,
        },
        fetchPolicy: 'network-only',
      });
    } catch (e) {
      console.log('super e', e);
    }
  };
  console.log('errors', errors);
  if (error) console.log('EERRRROOORR', error.message);
  return (
    <Layout>
      <h1 className="text-3xl mb-10 font-bold text-purple-500">
        Agregar Nueva Piscina
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-10 bg-white p-10 rounded-tr-xl rounded-tl-xl">
          {inputs.map((input) => (
            <div key={input.name} className="">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {input.label}
              </label>
              <input
                className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...input}
                {...register(input.name)}
              />
              <p>{errors[input.name]?.message}</p>
            </div>
          ))}
        </div>
        <input
          type="submit"
          value="Agregar"
          className="w-full h-14 transition-all bg-purple-700 hover:bg-purple-600 block rounded-bl-xl rounded-br-xl text-white cursor-pointer "
        />
      </form>
    </Layout>
  );
}
