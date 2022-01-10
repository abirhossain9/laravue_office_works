import Layout from '@/layout';

const categoryRoutes = {
  path: '/category',
  component: Layout,
  redirect: '/category/manage',
  name: 'Category',
  alwaysShow: true,
  meta: {
    title: 'category',
    icon: 'category',
    permissions: ['view menu category'],
  },
  children: [
    {
      path: 'manage',
      component: () => import('@/views/category/List'),
      name: 'CategoryList',
      meta: { title: 'category', icon: 'category', permissions: ['manage category'] },
    },
  ],
};
export default categoryRoutes;
