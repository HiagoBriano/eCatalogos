import React from 'react';
import './style.css';
import { IImage } from '../../service/interface';

interface Props {
  images: IImage[];
  setCurrentImage: (data: number) => void;
}

export default function Options({ images, setCurrentImage }: Props) {
  return (
    <div className="Options--top">
      <img src="data:image/svg+xml,%3csvg%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='16'%20cy='16'%20r='16'%20fill='%23809caa'/%3e%3cpath%20d='M13.8572%205.35721C13.8572%205.92553%2014.0829%206.47058%2014.4848%206.87244C14.8867%207.2743%2015.4317%207.50007%2016%207.50007C16.5684%207.50007%2017.1134%207.2743%2017.5153%206.87244C17.9171%206.47058%2018.1429%205.92553%2018.1429%205.35721C18.1429%204.78889%2017.9171%204.24385%2017.5153%203.84198C17.1134%203.44012%2016.5684%203.21436%2016%203.21436C15.4317%203.21436%2014.8867%203.44012%2014.4848%203.84198C14.0829%204.24385%2013.8572%204.78889%2013.8572%205.35721ZM17.0715%2010.9822H14.9286C14.7813%2010.9822%2014.6607%2011.1027%2014.6607%2011.2501V26.7858C14.6607%2026.9331%2014.7813%2027.0536%2014.9286%2027.0536H17.0715C17.2188%2027.0536%2017.3393%2026.9331%2017.3393%2026.7858V11.2501C17.3393%2011.1027%2017.2188%2010.9822%2017.0715%2010.9822Z'%20fill='white'/%3e%3c/svg%3e" />

      <img src="data:image/svg+xml,%3csvg%20width='29'%20height='28'%20viewBox='0%200%2029%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%2044'%3e%3ccircle%20id='Ellipse%202'%20cx='14.0879'%20cy='14'%20r='14'%20fill='%23809CAA'/%3e%3cg%20id='&amp;%23240;&amp;%23159;&amp;%23166;&amp;%23134;%20icon%20&amp;%2334;magnifying%20glass&amp;%2334;'%3e%3cpath%20id='Vector'%20d='M13.0399%205.74631C9.4067%205.74631%206.45117%208.73412%206.45117%2012.407C6.45117%2016.0799%209.4067%2019.0677%2013.0399%2019.0677C14.1506%2019.0677%2015.2425%2018.8013%2016.1649%2018.2875C16.2388%2018.3774%2016.3207%2018.4602%2016.4096%2018.5349L18.2921%2020.438C18.4659%2020.6357%2018.6779%2020.7954%2018.915%2020.9073C19.1521%2021.0192%2019.4093%2021.081%2019.6709%2021.0888C19.9324%2021.0966%2020.1928%2021.0502%2020.436%2020.9526C20.6792%2020.855%2020.9001%2020.7081%2021.0851%2020.5211C21.2702%2020.334%2021.4154%2020.1107%2021.512%2019.8649C21.6086%2019.619%2021.6544%2019.3558%2021.6467%2019.0914C21.639%2018.827%2021.5779%2018.5669%2021.4672%2018.3272C21.3565%2018.0875%2021.1985%2017.8733%2021.0029%2017.6975L19.1204%2015.7945C19.0287%2015.7017%2018.9278%2015.6188%2018.8192%2015.5471C19.3275%2014.6146%2019.6475%2013.5298%2019.6475%2012.388C19.6475%208.71509%2016.692%205.72728%2013.0588%205.72728L13.0399%205.74631ZM13.0399%207.64937C15.6566%207.64937%2017.7462%209.76177%2017.7462%2012.407C17.7462%2013.663%2017.2944%2014.8239%2016.5037%2015.6803C16.4849%2015.6993%2016.4661%2015.7184%2016.4473%2015.7374C16.3583%2015.8121%2016.2764%2015.8949%2016.2025%2015.9848C15.3742%2016.746%2014.2447%2017.1837%2013.0211%2017.1837C10.4044%2017.1837%208.31485%2015.0713%208.31485%2012.4261C8.31485%209.7808%2010.4044%207.6684%2013.0211%207.6684L13.0399%207.64937Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e" />

      <div className="Options--item">
        {images.map((image, index) => (
          <img
            onClick={() => setCurrentImage(index)}
            key={image.id}
            src={`https://api.forca-de-vendas.integrador.backup.e-catalogos.net/images/${image.companyKey}/${image.path}`}
          />
        ))}
      </div>

      <img src="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%2046'%3e%3ccircle%20id='Ellipse%203'%20cx='14'%20cy='14'%20r='14'%20fill='%23809CAA'/%3e%3cg%20id='&amp;%23240;&amp;%23159;&amp;%23166;&amp;%23134;%20icon%20&amp;%2334;cart&amp;%2334;'%3e%3cpath%20id='Vector'%20d='M5.65243%207.5059C5.35831%207.55348%205.09494%207.71721%204.92024%207.96109C4.74554%208.20497%204.67384%208.50902%204.7209%208.80635C4.76796%209.10368%204.92992%209.36993%205.17117%209.54653C5.41242%209.72314%205.71318%209.79562%206.00729%209.74805H9.33418L9.53379%2010.3086L10.4431%2013.1113L11.3525%2015.914C11.4412%2016.2054%2011.8183%2016.4745%2012.1066%2016.4745H19.8693C20.1798%2016.4745%2020.5347%2016.2054%2020.6234%2015.914L22.4199%2010.3086C22.5087%2010.0171%2022.3756%209.74805%2022.0651%209.74805H12.2175L11.3747%208.13371C11.2849%207.94841%2011.1463%207.79176%2010.9741%207.68099C10.8019%207.57022%2010.6028%207.50963%2010.3988%207.5059L5.96293%207.5059C5.89653%207.49984%205.82972%207.49984%205.76332%207.5059C5.719%207.50321%205.67456%207.50321%205.63025%207.5059L5.65243%207.5059ZM12.6611%2018.7166C12.0401%2018.7166%2011.5521%2019.2099%2011.5521%2019.8377C11.5521%2020.4655%2012.0401%2020.9588%2012.6611%2020.9588C13.2821%2020.9588%2013.77%2020.4655%2013.77%2019.8377C13.77%2019.2099%2013.2821%2018.7166%2012.6611%2018.7166ZM19.3148%2018.7166C18.6938%2018.7166%2018.2059%2019.2099%2018.2059%2019.8377C18.2059%2020.4655%2018.6938%2020.9588%2019.3148%2020.9588C19.9359%2020.9588%2020.4238%2020.4655%2020.4238%2019.8377C20.4238%2019.2099%2019.9359%2018.7166%2019.3148%2018.7166Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e" />
    </div>
  );
}
