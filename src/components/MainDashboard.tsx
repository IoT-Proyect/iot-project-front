import { Pool } from './Pool';

export const MainDashboard = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div>
        <h1 className="font-bold text-2xl mb-4">Dashboard Main</h1>
        <div className="grid grid-cols-2 gap-4">
          <Pool id="618b6bbbaee1b0fceeafcb84" name="Alberca Casa" />
          <Pool id="618b6bbbaee1b0fceeafcb84" name="Chapolandia" />
        </div>
      </div>
    </div>
  );
};
