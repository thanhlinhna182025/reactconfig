import * as request from '~/ultil/request';

export const search = async (q, type = 'less') => {
  try {
    const results = await request.get('users/search', { params: { q, type } });
    return results.data;
  } catch (error) {
    console.log(error);
  }
};

