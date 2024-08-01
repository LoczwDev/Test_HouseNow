import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="pt-10">
          <Tabs defaultValue="all">
            <TabsList className="flex items-center gap-3">
              {['all', 'pending', 'completed'].map((status) => (
                <TabsTrigger
                  key={status}
                  value={status}
                  className={`rounded-full border border-gray-200 px-6 py-2 text-sm font-bold text-gray-700 ${`data-[state=active]:bg-gray-700 data-[state=active]:text-white`} hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            {['all', 'pending', 'completed'].map((status) => (
              <TabsContent
                key={status}
                value={status as 'all' | 'pending' | 'completed'}
              >
                <div className="pt-10">
                  <TodoList
                    statusFilter={status as 'all' | 'pending' | 'completed'}
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
