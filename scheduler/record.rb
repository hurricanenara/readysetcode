    def record_cash_balance
        # scheduler = Rufus::Scheduler.new
        scheduler = Rufus::Scheduler::singleton
        puts "recording cash balance"
        debugger
        @current_user_id = self.id || 70
        @current_user = User.find(@current_user_id)
        # create record every 5 minutes from 9:30 - 9:55
        scheduler.cron '30-55/5 9 * * 1-5' do
            PortfoDatum.create!({
                user_id: @current_user_id,
                date: Time.now,
                holdings_snapshot: @current_user.holdings,
                label: Time.now.strftime("%I:%M %p"),
                cash_balance: @current_user.cash_balance
            })
        end
        # create record every 5 minutes from 10:00 - 15:55
        scheduler.cron '*/1 10-15 * * 1-5' do
            puts "cron"
            @data = PortfoDatum.new({
                user_id: @current_user_id,
                date: Time.now,
                holdings_snapshot: @current_user.holdings,
                label: Time.now.strftime("%I:%M %p"),
                cash_balance: @current_user.cash_balance
            })
            if @data.save
                puts `Data created #{Time.now}`
            end
        end
        # create record at 16:00
        scheduler.cron '0 16 * * 1-5' do
            PortfoDatum.create!({
                user_id: @current_user_id,
                date: Time.now,
                holdings_snapshot: @current_user.holdings,
                label: Time.now.strftime("%I:%M %p"),
                cash_balance: @current_user.cash_balance
            })
        end
    end