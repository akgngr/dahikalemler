import Layout from '../components/layout';

const Success = () => {
  return (
    <Layout>
      <div className="w-8/12 m-auto my-12 bg-blue-400 text-white p-8">
        <h1 className="font-black text-3xl mb-4 text-blue-900">Başarılı..!</h1>
        <p className="mb-4">
          Mesajınız başarılı bir şekilde tarafıma ulaşmıştır. En kısa sürede size dönüş yapacağız. Bizimle iletişime
          geçtiğiniz için teşekkür ederiz.
        </p>
        <p>
          Birazdan Anasayfaya yönlendirileceksiniz. Eğer yönlendirilmediyseniz{' '}
          <a className="text-pink-700" href="/">
            buraya
          </a>{' '}
          tıklayarak anasayfaya geçebilirsiziniz.
        </p>
      </div>
    </Layout>
  );
};

export default Success;
